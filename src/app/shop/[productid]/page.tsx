'use client'
import Image from "next/image";
import { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import ShortSec from "@/components/ShortSec";
import { secData, type SecData } from "@/utils/dynamicpage";

export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  const data = secData.find((item: SecData) => item.id === params.productid);

  // Initializing state for size, color, quantity, and cart
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("purple");
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = () => {
    const productToAdd = {
      ...data,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
    setCart([...cart, productToAdd]);
  };

  // Increment and Decrement functions
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Fallback image if no data is found
  const getImageForSizeAndColor = () => {
    if (data) {
      if (selectedSize === "L" && selectedColor === "purple") {
        return "/images/large-purple-image.jpg"; 
      }
      if (selectedSize === "M" && selectedColor === "black") {
        return "/images/medium-black-image.jpg"; 
      }
      if (selectedSize === "XL" && selectedColor === "black") {
        return "/images/large-black-image.jpg"; 
      }
      return data.image || '/images/default-product.jpg'; // Fallback to default image
    }
    return '/images/default-product.jpg'; // Fallback image if data is not found
  };

  if (!data) {
    return <div>Product not found</div>; // Show message if product not found
  }

  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={getImageForSizeAndColor()} // Dynamically change image
                alt="Product main view"
                layout="responsive"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden"
                >
                  <Image 
                    src={getImageForSizeAndColor()} // Dynamically change thumbnail
                    alt={`Product view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">{data.title}</h1>
              <p className="text-xl text-gray-700">Rs. {data.price}.00</p>
            </div>

            {/* Size and Color Selection */}
            {/* ... Your size and color selection code here ... */}

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button onClick={decrementQuantity} className="px-4 py-2 border-r">-</button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-none focus:outline-none"
                />
                <button onClick={incrementQuantity} className="px-4 py-2 border-l">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <hr className="text-[#FFFFFF] w-full my-2 mb-8" />
        <ShortSec title="More Products" />
      </div>
    </div>
  );
}
