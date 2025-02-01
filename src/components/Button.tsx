"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutButtonProps {
  cart: { title: string; price: number; quantity: number; imageUrl: string }[];
  cartTotal: number;
  clearCart: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  loading: boolean;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ cart, clearCart, setLoading, setError, loading }) => {
  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    const stripe = await stripePromise;
    const items = cart.map(item => ({
      name: item.title,
      price: item.price * 100,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
    }));

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: items }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error from server:", errorResponse);
        setError("Something went wrong with the checkout.");
        return;
      }

      const session = await response.json();

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
        clearCart();
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      setError("An error occurred during the checkout process.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="w-full h-[48px] bg-black text-white rounded-xl mt-8"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Processing..." : "Place Order with Stripe"}
    </button>
  );
};

export default CheckoutButton;
