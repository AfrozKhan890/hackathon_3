import Homeproducts from "@/query/HomeProducts/Page";
import Link from "next/link";

export default function ShortSec(){
  return (
    <section>
      <h1 className="text-[#333333] text-[40px] text-center font-bold mt-14 mb-6">
        Our Products
      </h1>
      <Homeproducts />
      <div className="flex items-center justify-center mt-6">
        <Link href={"/shop"}>
          <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#946F27] text-[#946F27] hover:bg-[#946F27] hover:text-white">
            Show More
          </button>
        </Link>
      </div>
    </section>
  );
};

