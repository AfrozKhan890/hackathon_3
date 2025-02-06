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


// "use client";
// import { useCart } from "@/context/CartContext";
// // import { useEffect } from "react";
// // import { useAtom } from "jotai";
// import { useUser } from "@clerk/nextjs";
// // import { Order } from "../../../interface";
// // import { customerFormDetails } from "../store";
// // import { addToCart } from "../addToCart";

// // Utility function to call the API
// // const postOrderData = async (order: Order) => {
// //   try {
// //     const response = await fetch('/api/orders', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(order),
// //     });
// //     const data = await response.json();
// //     console.log('Order response:', data);
// //   } catch (error) {
// //     console.error('Error posting order:', error);
// //   }
// // };

// const OrderSuccessPage = () => {
//   //   const [cartItems] = useAtom(addToCart); // Get cart items from addToCart atom
//   //   const [billingDetails] = useAtom(customerFormDetails); // Get billing details from customerFormDetails atom
//   const { user, isLoaded, isSignedIn } = useUser();
//   const {clearCart} = useCart();

//   clearCart()

//   //   useEffect(() => {
//   //     if (billingDetails && cartItems.length > 0) {
//   //       // Calculate the total amount from the cart items
//   //       const totalAmount = cartItems.reduce((total, item) => total + item.Finalprice * item.Quantity, 0);

//   //       // Create the order object based on existing data
//   //       const order: Order = {
//   //         customerDetails: billingDetails,
//   //         cartItems: cartItems,
//   //         totalAmount: totalAmount,
//   //       };

//   //       // Post the order data to the API
//   //       postOrderData(order);
//   //     }
//   //   }, [billingDetails, cartItems]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <div className="flex flex-col items-center space-y-12">
//         <h1 className="text-darkyellow text-7xl font-bold">Order Success</h1>
//         {isLoaded && isSignedIn && (
//           <p className="text-xl font-normal">
//             Thank you, {user?.fullName}. Your order has been placed
//             successfully.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderSuccessPage;
