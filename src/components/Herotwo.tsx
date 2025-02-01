import Image from "next/image";
import Link from "next/link";
export default function HeroTwo() {
  return (
    <section className="bg-lightreddish text-black flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="h-[505px] w-[800] ">
            <Image src={"/squaretable.png"} className="h-[400px] w-[500px]" alt="Hero 1" width={400} height={400}></Image>
            <h2 className="text-2xl md:text-4xl">Side Table</h2>
            <div className="pt-4">
            <span className="border-b-2 border-black">View More</span>
            </div>
        </div>
        <div  className="h-[505px] w-[800]">
            <Image src={"/cloudsofa.png" } className="h-[400px] w-[500px]" alt="Hero 2" width={400} height={400}></Image>
            <h2 className="text-2xl md:text-4xl">Side Table</h2>
            <div className="pt-4">
            <span className="border-b-2 border-black">View More</span>
            </div>
        </div>
      </div>
    </section>
  );
}
