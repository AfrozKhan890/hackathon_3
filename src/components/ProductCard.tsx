// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-[#F4F5F7] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={285}
          height={301}
          className="w-full h-52 object-cover rounded-md cursor-pointer"
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-[24px] font-semibold text-[#3A3A3A] mt-4 hover:underline">{product.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[20px] font-semibold">${product.price}</p>
          {product.discountPercentage > 0 && (
            <span className="text-red-500 text-sm">-{product.discountPercentage}% OFF</span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {product.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-slate-300 text-black rounded-full px-3 py-1 whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
