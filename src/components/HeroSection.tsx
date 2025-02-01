import Image from "next/image";
import Link from "next/link";

export default function HeroSection(){
  return (
    <div className="relative bg-gray-50">
      {/* Hero Image */}
      <div className="w-full">
        <Image
          src="/images/hero-sec.png"
          alt="hero-section"
          width={1440}
          height={316}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="w-full h-auto mt-20"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-1/2 right-2 md:right-20 transform -translate-y-1/2 bg-[#EFE7D6] p-3 sm:p-6 md:p-14 rounded-lg shadow-lg max-w-full md:max-w-lg text-left">
        <h2 className="font-poppins font-semibold text-[10px] sm:text-[14px] md:text-[16px] uppercase text-[#333333] tracking-wide">
          New Arrival
        </h2>
        <h1 className="text-[12px] sm:text-lg md:text-3xl font-bold text-[#5A4815] mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-4">
          Discover Our New Furniture 
          <span className="block sm:inline"> Collection</span>  
        </h1>
        <p className="text-gray-600 mb-2 sm:mb-6 text-[8px] sm:text-xs md:text-base leading-relaxed sm:leading-normal">
          <span className="text-[#4A3A12] block sm:inline">Crafted to perfection with exquisite designs and</span> 
          <span className="text-[#4A3A12] block sm:inline"> unmatched comfort to elevate your living spaces.</span> 
        </p>
        <Link href={'/shop'}>
          <button className="bg-[#8C6D23] text-white text-[10px] sm:text-sm md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:bg-[#70561C] transition shadow-lg">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

    