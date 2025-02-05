"use client";

import { useState } from "react";
import { CartItem, useCart } from "@/context/CartContext";

export default function AddTocartDynamicPage({ product }: { product: CartItem }) {
  const { addToCart, updateQty } = useCart();
  const [quantity, setQuantity] = useState(1); // Initializing quantity state

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent quantity from going below 1
  };

  const handleAddToCart = () => {
    // Add item to cart with the updated quantity
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex items-center gap-4">
      {/* Quantity Selector */}
      <div className="flex items-center border rounded-lg">
        <button
          className="px-4 py-2 border-r"
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center border-none focus:outline-none"
        />
        <button className="px-4 py-2 border-l" onClick={handleIncrease}>
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        Add To Cart
      </button>
    </div>
  );
}
