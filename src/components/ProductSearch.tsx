// components/ProductSearch.tsx
"use client";
import React from "react";
import sanityClient from "@sanity/client";
import SearchForm from "./SearchForm";
import ProductCard from "./ProductCard";

const client = sanityClient({
  projectId: "2srh4ekv",
  dataset: "productions",
  token: "YOUR_SANITY_TOKEN",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  slug: string;
}

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "product" && title match "${searchTerm}*"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags,
          category,
          "slug": slug.current
        }`;
        const results = await client.fetch(query);
        setFilteredProducts(results);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  return (
    <div className="mt-28">
      {/* Search Form */}
      <SearchForm searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      {/* Product List */}
      <div className="product-list p-4">
        <h1 className="text-[#333333] text-[30px] text-center font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-xl text-center">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
