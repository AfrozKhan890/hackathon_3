import React from "react";

interface OrderSummaryProps {
  cartTotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartTotal }) => {
  return (
    <div className="border-t border-gray-300 mt-4 pt-4">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Subtotal:</span>
        <span className="font-semibold">Rs. {cartTotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">Total:</span>
        <span className="font-semibold">Rs. {cartTotal.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
