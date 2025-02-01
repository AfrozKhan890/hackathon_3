import Image from "next/image";
import { urlFor } from "@/utils/urlFor";  // Import the urlFor function from utils

// Define the Product type
interface Product {
  title: string;
  price: number;
  image: any;  // You can use a more specific type here if needed (e.g., Sanity image type)
}

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div>
      {/* Product Image */}
      <Image
        src={urlFor(product.image).width(500).url()}  // Dynamically generate image URL using urlFor
        alt={product.title}
        layout="responsive"
        height={400}
        width={400}
        className="object-cover rounded-lg"
      />
    </div>
  );
}

export default ProductDetail;
