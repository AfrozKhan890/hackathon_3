import Image from "next/image";
import Link from "next/link";

const InspirationSection = () => {
  return (
    <section className="h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around">
      <div className="text-center lg:text-left px-6 lg:px-0">
        <h1 className="text-[#333333] text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]">
          Our designer already made a lot of beautiful prototypes of rooms
          that inspire you.
        </p>
        <Link href={`/explorerrooms`}>
          <button className="w-[70%] md:w-[176px] h-[48px] bg-[#8C6D23] text-[#FFFFFF] mt-8 transition duration-300 ease-in-out hover:bg-[#70561C] hover:scale-105">
            Explore More
          </button>
        </Link>
      </div>
      {["img6", "img5"].map((image, index) => (
        <div key={index} className="mt-8 lg:mt-0">
          <Image
            src={`/images/${image}.png`}
            alt={image}
            width={index === 0 ? 404 : 372}
            height={index === 0 ? 582 : 486}
            className="w-full"
          />
        </div>
      ))}
    </section>
  );
};

export default InspirationSection;
