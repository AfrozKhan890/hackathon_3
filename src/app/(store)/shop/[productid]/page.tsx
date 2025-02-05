import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import { CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";
import ShortSec from "@/components/ShortSec";
import { getProductById } from "@/sanity/queries/FetchProduct";
import { getFeaturedProduct } from "@/sanity/queries/FetchProduct";
import AddTocartDynamicPage from "@/components/AddToCartDynamicPage";


export default async function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  // const data = secData.find((item: SecData) => item.id === params.productid);

  const product = await getProductById(params.productid);
  const featuredData = (await getFeaturedProduct()) || [];

  console.log(product);
  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className=" mx-auto px-4 py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={`${product?.imageUrl}`}
                alt={`${product?.name} view 1`}
                layout="responsive"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden"
                >
                  <Image
                    src={`${product?.imageUrl}`}
                    alt={`Asgaard sofa view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {product?.name}
              </h1>
              <p className="text-xl text-gray-700">Rs. {product?.price}.00</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product?.rating} Customer Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            {/* Size Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Size
              </span>
              <div className="flex gap-2 mt-2">
                {(product?.sizes || []).map((size) => (
                  <button
                    key={size}
                    className="p-2 border rounded-lg flex items-center justify-center text-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Color
              </span>
              <div className="flex gap-2 mt-2">
                <button className="w-6 h-6 rounded-full bg-purple-600" />
                <button className="w-6 h-6 rounded-full bg-black" />
                <button className="w-6 h-6 rounded-full bg-yellow-700" />
              </div>
            </div> */}

            {/* Quantity and Add to Cart */}
            {product && (
              <AddTocartDynamicPage
                product={{
                  id: product._id,
                  name: product.name,
                  image: product.imageUrl,
                  price: product.price,
                  quantity: 1, // Default quantity
                  stock: product.stockLevel || 0, // Ensure stock is handled
                }}
              />
            )}
            {/* <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button className="px-4 py-2 border-r">-</button>
                <input
                  type="number"
                  value="1"
                  readOnly
                  className="w-12 text-center border-none focus:outline-none"
                />
                <button className="px-4 py-2 border-l">+</button>
              </div>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                Add To Cart
              </button>
            </div> */}

            {/* Product Metadata */}
            <div className="space-y-2 pt-4 border-t text-sm text-gray-600">
              <div className="flex justify-between">
                <span>SKU</span>
                <span>{product?._id}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span>{product?.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span>{(product?.tags || []).join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span>Share</span>
                <div className="flex gap-2">
                  <Link href="#" className="text-lg text-blue-600">
                    <CiFacebook />
                  </Link>
                  <Link href="#" className="text-lg text-blue-500">
                    <CiLinkedin />
                  </Link>
                  <Link href="#" className="text-lg text-pink-500">
                    <CiInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-[#FFFFFF] w-full my-2 mb-8 " />
        <div className="my-10 text-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#9F9F9F]">
            <p className="text-black font-semibold cursor-pointer hover:underline">
              Description
            </p>
            <p className="cursor-pointer hover:underline">
              Additional Information
            </p>
            <p className="cursor-pointer hover:underline">Reviews [5]</p>
          </div>

          {/* Description Section */}
          <div className="grid gap-6 mt-6 text-[#9F9F9F] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[30px] px-4 sm:px-8 md:px-16 lg:px-24">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>

      <ShortSec
        title="More Products"
        description="find a bright ideal to suit your taste with our great selection of suspension, floor and table lights"
        cardData={featuredData}
      />
      <Service />
    </div>
  );
}
