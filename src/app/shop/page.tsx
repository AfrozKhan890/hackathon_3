"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/utils/urlFor";
import BreadCrumb from "@/components/BreadCrumb";
import Filter from "@/components/Filter";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

// Assuming you want to keep cart and wishlist in local state for now.
export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(16);
  const [sortOrder, setSortOrder] = useState("default");
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch('*[_type == "product"]');
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Sorting Logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "az") return a.Heading.localeCompare(b.Heading);
    if (sortOrder === "za") return b.Heading.localeCompare(a.Heading);
    if (sortOrder === "newest") return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
    if (sortOrder === "oldest") return new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime();
    if (sortOrder === "Price Low to High") return a.price - b.price;
    if (sortOrder === "Price High to Low") return b.price - a.price;
    return 0;
  });

  // Add to Cart Function
  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.Heading} added to cart!`);
  };

  // Add to Wishlist Function
  const addToWishlist = (product: any) => {
    setWishlist([...wishlist, product]);
    alert(`${product.Heading} added to wishlist!`);
  };

  return (
    <div className="p-4">
      <BreadCrumb title="Shop" url="shop" />

      {/* Filter Component */}
      <Filter onSortChange={setSortOrder} onShowChange={setShowCount} />

      {/* Product Grid */}
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="h-72 w-full bg-gray-200 animate-pulse rounded-lg"
                    ></div>
                  ))
              : sortedProducts.slice(0, showCount).map((product) => (
                  <div
                    key={product._id}
                    className="relative cursor-pointer bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
                    onMouseEnter={() => setHoveredProduct(product._id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link href={`/shop/${product._id}`}>
                      {/* Product Image with Hover Effect */}
                      <div className="relative w-full h-60 overflow-hidden rounded-lg border border-gray-200">
                        <img
                          src={urlFor(product.image).width(600).height(500).url()}
                          alt={product.image?.alt || product.name}
                          className="object-contain w-full h-full"
                        />
                        {/* Hover Buttons */}
                        {hoveredProduct === product._id && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-100 transition-opacity duration-300">
                            <button
                              className="bg-blue-600 p-3 text-white rounded-full hover:bg-blue-700"
                              onClick={(e) => { e.preventDefault(); addToCart(product); }}
                            >
                              <FaShoppingCart size={20} />
                            </button>
                            <button
                              className="bg-red-600 p-3 text-white rounded-full hover:bg-gray-700"
                              onClick={(e) => { e.preventDefault(); addToWishlist(product); }}
                            >
                              <FaHeart size={20} />
                            </button>
                          </div>
                        )}
                      </div>
                    </Link>
                    {/* Product Details */}
                    <h3 className="mt-3 text-lg font-semibold text-gray-800 text-center">
                      {product.Heading}
                    </h3>
                    <p className="mt-2 text-md font-bold text-gray-600 text-center">
                      Rs. {product.price.toLocaleString("en-US")}.00
                    </p>
                  </div>
                ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <button className="mx-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              1
            </button>
            <button className="mx-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
              2
            </button>
            <button className="mx-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
              3
            </button>
            <button className="mx-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
