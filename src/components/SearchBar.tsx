"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation
import { Search } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/types";
import Link from "next/link";
export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter(); // Next.js router instance

  // Search handler
  const handleSearch = useCallback(async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const groqquery = `*[_type == "product" && (
        lower(title) match "*${query.toLowerCase()}*" || 
        lower(description) match "*${query.toLowerCase()}*" ||
        "${query.toLowerCase()}" in tags[] 
      )] {
        _id,
        name,
        price,
        "imageUrl": image.asset->url,
        category,
      }`;
      const results = await client.fetch(groqquery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounce function
  const debounce = <T extends (...args: string[]) => void>(func: T, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [handleSearch]);

  // Trigger search on input change
  const handleSearchTermChange = (search: string) => {
    setSearchTerm(search);
    debouncedSearch(search);
  };

  // Handle product selection
  const handleProductSelect = (productId: string) => {
    setOpen(false); // Close the search modal
    router.push(`shop/${productId}`); // Navigate to the product page
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
      >
        <Search size={20} className="text-black" />

      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">Search Products</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4">
              <input
                type="text"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Search Results */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
              ) : searchResults.length > 0 ? (
                <ul className="space-y-4">
                  {searchResults.map((product) => (
                    <li key={product._id}>
                     <Link href={`/shop/${product._id}`} >
                     <div
                        onClick={() => handleProductSelect(product._id)}
                        className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{product.name}</h4>
                          <p className="text-sm text-gray-500">${product.price}</p>
                        </div>
                      </div>
                     </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-gray-600">No products found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
