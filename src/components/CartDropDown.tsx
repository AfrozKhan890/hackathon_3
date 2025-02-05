"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { roundOff } from "@/helper/roundoff";
import { Button } from "@/components/ui/button";

export default function CartDropdown() {
  const { items, updateQty, removeFromCart } = useCart();

  const calculateSubtotal = () => {
    return items.reduce(
      (total, item) => total + Number(roundOff(item.price)) * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-col h-full p-4 text-gray-800 bg-white">
      {/* Items Section */}
      <div className="flex-grow overflow-y-auto">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-200"
            >
              {/* Product Image */}
              <div className="w-full h-full sm:w-20 sm:h-20 sm:flex-top flex justify-center relative">
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.name}
                  className="object-contain rounded bg-[#fbebb5] p-1"
                />
                 <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-lg font-bold absolute top-0 right-0"
              >
                &times;
              </button>
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col gap-1 text-sm sm:text-base">
                <p className="font-medium">{item.name}</p>
                <p>
                  {item.quantity} x{" "}
                  <span className="text-[#B88E2F] font-semibold">
                    ${item.price}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    className="px-2 text-black hover:bg-[#f0d786] hover:text-black"
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    className="px-2 text-black hover:bg-[#f0d786] hover:text-black"
                    onClick={() => updateQty(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </Button>
                </div>
              </div>

              {/* Remove Button */}
             
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Summary & Buttons */}
      {items.length > 0 && (
        <div className="mt-4">
          {/* Cart Summary */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-md font-medium">Total</p>
            <p className="text-md font-semibold text-[#B88E2F]">
              $ {calculateSubtotal()}.00
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cart">
              <button className="w-full sm:w-auto px-6 py-3 text-sm border border-black rounded-full hover:bg-gray-100">
                View Cart
              </button>
            </Link>
            <Link href="/checkout">
              <button className="w-full sm:w-auto px-6 py-3 text-sm bg-black text-white rounded-full hover:bg-gray-900">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
