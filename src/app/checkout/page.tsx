"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCartContext } from "@/components/CartContext";
import OrderSummary from "@/components/OrderSummary";
import Button from '@/components/Button';
import CartItems from "@/components/CartItems";

export default function CheckOut(){
  const { cart, cartTotal, clearCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Image
        src={"/images/checkout.png"}
        alt="checkout"
        width={1440}
        height={316}
        className="w-full h-auto mt-20"
      />

      <div className="container mx-auto px-4 lg:px-12 mt-16 text-center">
        <h1 className="text-3xl font-semibold mb-5">Review Your Order</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[500px] mx-auto">
          <h2 className="text-xl font-semibold mb-4">Products</h2>

          {/* Cart Items List */}
          <CartItems cart={cart} />

          {/* Order Summary */}
          <OrderSummary cartTotal={cartTotal} />

          {/* Error Message */}
          {error && <div className="text-red-500 mt-4">{error}</div>}

          {/* Checkout Button */}
          <Button  
            cart={cart} 
            cartTotal={cartTotal} 
            clearCart={clearCart} 
            setLoading={setLoading} 
            setError={setError} 
            loading={loading} 
          />
        </div>
      </div>
    </div>
  );
};

