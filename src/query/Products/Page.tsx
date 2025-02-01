"use client";
import React from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { useCartContext } from "@/components/CartContext";
import Link from "next/link";
import Swal from "sweetalert2";

const sanity = sanityClient({
  projectId: "2srh4ekv",
  dataset: "productions",
  apiVersion: '2025-01-18',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});

interface Project {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  category: string;
  slug: string;
}

const ProductCards: React.FC = () => {
  const { addToCart } = useCartContext();
  const [products, setProducts] = React.useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [productsPerPage] = React.useState<number>(8);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
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

      const data: Project[] = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Project) => {
    addToCart({ ...product, quantity: 1 });

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      icon: "success",
      showConfirmButton: false,
      timer: 3000, // Auto-close after 3 seconds
      toast: true, // Show as a toast
      position: "top-end", // Position at the top-right corner
      background: "#F9F1E7", // Custom background color
      iconColor: "#816DFA", // Custom icon color
      customClass: {
        popup: "shadow-lg rounded-md", // Custom class for popup
      },
    });
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const categories = React.useMemo(() => {
    const allCategories = Array.from(
      new Set(products.map((product) => product.category).filter(Boolean))
    );
    return ["All", ...allCategories.sort()];
  }, [products]);

  return (
    <div className="p-4">
      <h1 className="text-[#333333] text-[40px] text-center font-bold mt-6 mb-6">
        Our Products
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300 shadow-sm"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols gap-6">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-[#F4F5F7] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.imageUrl || '/default-image.jpg'}
                alt={product.title}
                width={285}
                height={301}
                className="w-full h-80 object-cover rounded-md"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-[24px] font-semibold text-[#3A3A3A] ml-2 mt-4">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-1 ml-2">{product.description}</p>
              <div>
                <p className="text-[20px] font-semibold mr-6 ml-2">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <span className="text-red-500 text-sm">-{product.discountPercentage}% OFF</span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-3">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-300 line-clamp-1 text-black rounded-full px-3 py-1 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <button
                className="mt-4 w-full text-white bg-[#7A6D3A] rounded-md py-3 px-11 transition duration-300 ease-in-out hover:bg-[#B88E2F]"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-14">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            aria-label="Previous Page"
          >
            Previous
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => {
          if (index + 1 === currentPage || (index + 1 >= currentPage - 2 && index + 1 <= currentPage + 2)) {
            return (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-[60px] h-[60px] flex items-center justify-center rounded-full ${currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-gray-300"} rounded-md hover:bg-gray-400`}
              >
                {index + 1}
              </button>
            );
          }
        })}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center hover:bg-[#B88E2F] hover:text-white"
            aria-label="Next Page"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
