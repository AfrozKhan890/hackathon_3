import { useState } from 'react';
import Swal from 'sweetalert2';
import { useCartContext } from './CartContext';

interface ProductDetailsProps {
  product: {
    title: string;
    price: number;
    description: string;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCartContext();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#816DFA');

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title} has been added to your cart.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
      toast: true,
      position: 'top-end',
      background: '#F9F1E7',
      iconColor: '#816DFA',
    });
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-4xl font-semibold mb-2">{product.title}</h1>
      <span className="text-2xl text-[#333333]">$ {product.price}</span>

      <p className="mt-6 text-sm lg:text-base">
        {showFullDescription ? product.description : `${product.description.slice(0, 260)}...`}
        <button className="text-blue-700 underline ml-2" onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>
      </p>

      <h2 className="mt-14 text-[#333333]">Color:</h2>
      <div className="flex items-center gap-3 mt-4">
        {['#816DFA', 'black', '#B88E2F'].map((color) => (
          <div
            key={color}
            className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>

      <div className="flex items-center border border-black rounded-2xl w-full sm:w-[123px] h-16 mt-6">
        <button className="px-3" onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>-</button>
        <span className="px-4 flex-1 text-center">{quantity}</span>
        <button className="px-3" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>

      <button
        className="w-full mt-4 bg-black text-white rounded-lg py-3"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}
