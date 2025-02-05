"use client";

import Link from "next/link";
import Service from "@/components/Service";
import BreadCrumb from "@/components/BreadCrumb";
import { useWishlist } from "@/context/CartContext"; // Assuming you've created WishlistContext for global state management
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { WishlistItem } from "@/context/CartContext";

export default function MyAccount() {
  const { items, removeFromWishlist } = useWishlist();

  return (
    <div className="">
      {/* Breadcrumb Section */}
      <BreadCrumb title="My Wishlist" url="wishlist" />

      {/* Wishlist Section */}
      <div className="mt-12 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Your Wishlist
        </h2>
        <div className="flex w-full justify-center items-center px-4 sm:px-6 md:px-12">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {items.length > 0 ? (
              items.map((item: WishlistItem) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                >
                  {/* Image Section */}
                  <div className="relative h-[250px] flex justify-center items-center bg-lightgray rounded-t-lg overflow-hidden group">
                    <Link
                      href={`/shop/${item.id}`}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name || "Product Image"}
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                        width={600} // Set the image width
                        height={600} // Set the image height
                      />
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition duration-200"
                      title="Remove from Wishlist"
                    >
                      <FaHeart className="text-red-500 group-hover:text-red-600" />
                    </button>
                  </div>
                  {/* Product Info */}
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-xl text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">${item.price}</p>
                    <div className="mt-4">
                      <Link
                        href={`/shop/${item.id}`}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-gray-600">
                  Your wishlist is empty. Start adding some favorites!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Section */}
      <Service />
    </div>
  );
}
