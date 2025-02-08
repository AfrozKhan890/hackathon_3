"use client";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const OrderSuccessPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { clearCart } = useCart();

  // Clear the cart only once when the component mounts
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-12">
        <h1 className="text-darkyellow text-7xl font-bold">Order Success</h1>
        {isLoaded && isSignedIn && (
          <p className="text-xl font-normal">
            Thank you, {user?.fullName}. Your order has been placed successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderSuccessPage;
