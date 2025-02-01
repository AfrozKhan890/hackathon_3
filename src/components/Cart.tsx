"use client";
import { useCart } from "@/utils/CartContext"; 

const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart(); // Access cart and removeFromCart from context
  const pricePerUnit = 250000; // Static price per unit

  const handleQuantityChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCart = [...cart];
    const newQuantity = Math.max(1, parseInt(event.target.value) || 1);
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart); // Update the cart state through context
  };

  const calculateSubtotal = (quantity: number) => quantity * pricePerUnit;

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item: any, index: number) => (
            <div key={index}>
              <img src={item.image || "/default-image.png"} alt={item.title} width={64} height={64} />
              <h3>{item.title}</h3>
              <p>Rs. {pricePerUnit.toLocaleString()}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
              />
              <p>Subtotal: Rs. {calculateSubtotal(item.quantity).toLocaleString()}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
