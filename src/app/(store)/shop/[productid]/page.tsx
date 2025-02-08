"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import { CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";
import ShortSec from "@/components/ShortSec";
import AddTocartDynamicPage from "@/components/AddToCartDynamicPage";

// Define TypeScript Interface for Product
interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  description: string;
  sizes: string[];
  stockLevel: number;
  category: string;
  tags: string[];
}

// Component
export default function ProductDetail({ params }: { params: { productid: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [featuredData, setFeaturedData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch product by ID
        const productRes = await fetch(`/api/products?id=${params.productid}`);
        if (!productRes.ok) throw new Error("Failed to fetch product");
        const productData: Product | null = await productRes.json();
        if (!productData) throw new Error("Product not found");

        setProduct(productData);

        // Fetch all products (featured)
        const featuredRes = await fetch(`/api/products`);
        if (!featuredRes.ok) throw new Error("Failed to fetch featured products");
        const featuredData: Product[] = await featuredRes.json();
        setFeaturedData(featuredData);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.productid]);

  if (loading) {
    return <p className="text-center text-blue-500 text-lg font-semibold">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 text-lg font-semibold">Product not found!</p>;
  }

  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className="mx-auto px-4 py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={product.imageUrl || "/placeholder.jpg"}
                alt={product.name || "No Name"}
                layout="responsive"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden">
                  <Image
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={`Product view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {product.name || "No Name"}
              </h1>
              <p className="text-xl text-gray-700">Rs. {product.price?.toFixed(2) || "N/A"}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating ?? 0} Customer Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description || "No description available."}
            </p>

            {/* Size Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Size</span>
              <div className="flex gap-2 mt-2">
                {product.sizes?.length > 0 ? (
                  product.sizes.map((size) => (
                    <button key={size} className="p-2 border rounded-lg text-sm hover:bg-gray-100">
                      {size}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500">No sizes available</p>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Color</span>
              <div className="flex gap-2 mt-2">
                <button className="w-6 h-6 rounded-full bg-purple-600" />
                <button className="w-6 h-6 rounded-full bg-black" />
                <button className="w-6 h-6 rounded-full bg-yellow-700" />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <AddTocartDynamicPage
              product={{
                id: product._id || "N/A",
                name: product.name || "No Name",
                image: product.imageUrl || "/placeholder.jpg",
                price: product.price || 0,
                quantity: 1,
                stock: product.stockLevel || 0,
              }}
            />

            {/* Product Metadata */}
            <div className="space-y-2 pt-4 border-t text-sm text-gray-600">
              <div className="flex justify-between">
                <span>SKU</span>
                <span>{product._id || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span>{product.category || "No Category"}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span>{product.tags?.join(", ") || "No Tags"}</span>
              </div>
              <div className="flex justify-between">
                <span>Share</span>
                <div className="flex gap-2">
                  <Link href="#" className="text-lg text-blue-600"><CiFacebook /></Link>
                  <Link href="#" className="text-lg text-blue-500"><CiLinkedin /></Link>
                  <Link href="#" className="text-lg text-pink-500"><CiInstagram /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Products */}
        <ShortSec
          title="More Products"
          description="Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights."
          cardData={featuredData}
        />
        <Service />
      </div>
    </div>
  );
}
