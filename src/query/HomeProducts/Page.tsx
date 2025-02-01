"use client"
import React from 'react';
import sanityClient  from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';
import { useCartContext } from '@/components/CartContext';
import Swal from 'sweetalert2';


const sanity = sanityClient({
  projectId: "2srh4ekv",
  dataset: "productions",
  apiVersion: '2025-01-18',
  token:  process.env.SANITY_API_TOKEN,
  useCdn: true,
});

interface project {
    slug: any;
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    productImage: {
        asset: {
            _ref: string;
        };
    };
    tags: string[];
}

const Homeproducts: React.FC = () => {
    const [products, setProducts] = React.useState<project[]>([]);
    const [cart, setCart] = React.useState<project[]>([]);
    const { addToCart } = useCartContext();

    const fetchProducts = async () => {
        try {
            const query = `*[_type == "product"] [0...8] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags,
        category,
        "slug": slug.current
            }`;

            const data = await sanity.fetch(query);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    React.useEffect(() => {
       fetchProducts();
     }, []);
   
     const handleAddToCart = (product: any) => {
       addToCart({ ...product, quantity: 1 });
     
       // SweetAlert2 notification
       Swal.fire({
         title: "Added to Cart!",
         text: `${product.title} has been added to your cart.`,
         icon: "success",
         showConfirmButton: false,
         timer: 3000, // Auto-close after 2 seconds
         toast: true, // Show as a toast
         position: "top-end", // Position at the top-right corner
         background: "#F9F1E7", // Custom background color
         iconColor: "#816DFA", // Custom icon color
         customClass: {
           popup: "shadow-lg rounded-md", // Custom class for popup
         },
       });
     };



    return (
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols gap-6">
            {products.map((product) => (
              
              <div
                key={product._id}
                className="bg-[#F4F5F7] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={285}
                  height={301}
                  className="w-full h-80 object-cover rounded-md"
                />
                </Link>
                <div className="mt-4">
                  <h2 className="text-[24px] font-semibold text-[#3A3A3A] ml-2 mt-4">
                    {product.title}
                  </h2>
                  
                  <p className="text-sm text-gray-600 line-clamp-1 ml-2">
                    {product.description}
                  </p>
                  <div>
                    <p className="text-[20px] font-semibold mr-6 ml-2">
                      $ {product.price}
                    </p>
                    
                    {product.discountPercentage > 0 && (
                      <span className="text-red-500 text-sm">
                        -{product.discountPercentage}% OFF
                      </span>
                      
                    )}
                   
                  </div>
                 
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-300 line-clamp-1 text-black rounded-full px-3 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-between h-full">
                  
                  <button
                    className="mt-4 w-full text-white bg-[#7A6D3A] rounded-md py-3 px-11 transition duration-300 ease-in-out hover:bg-[#B88E2F]"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
        
    

export default Homeproducts;
