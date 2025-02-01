import React from "react";

interface CartItem {
  _id: string;
  title: string;
  quantity: number;
}

interface CartItemsListProps {
  cart: CartItem[];
}

const CartItems: React.FC<CartItemsListProps> = ({ cart }) => {
  return (
    <div>
      {cart.map(item => (
        <p key={item._id} className="text-lg mb-2">
          {item.title} <span className="text-black">X {item.quantity}</span>
        </p>
      ))}
    </div>
  );
};

export default CartItems;
