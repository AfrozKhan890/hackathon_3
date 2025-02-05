import Image from "next/image";
import Link from "next/link";
export default function HeroTwo() {
  return (
    <section className="bg-lightreddish text-black flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-around w-full items-center">
        <div className="h-auto py-5 ">
          <Image
            src={"/squaretable.png"}
            alt="Hero 1"
            width={500}
            height={400}
          />
          <h2 className="text-2xl md:text-4xl">Marble Top Side Table</h2>
          <div className="pt-4">
            <Link href={"/shop/df249dc5-0179-4a94-a5f1-1f84df156359"}>
              <span className="border-b-2 border-black">View Detail</span>
            </Link>
          </div>
        </div>
        <div className="h-[505px] ">
          <Image src={"/cloudsofa.png"} alt="Hero 2" width={500} height={400} />
          <h2 className="text-2xl md:text-4xl">CozeLuxe ArmChair</h2>
          <div className="pt-4">
            <Link href={"/shop/be8aa138-14fd-4c23-a291-11cec0daa115"}>
              <span className="border-b-2 border-black">View Detail</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
