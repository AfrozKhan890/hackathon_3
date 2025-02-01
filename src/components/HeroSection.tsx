import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-lightyellow pt-32 md:pt-0 flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
      {/* Text Section */}
      <div className="text-center md:text-left md:pl-8  ">
        <h1 className="text-4xl md:text-6xl  font-light text-gray-800">
          Rocket Single Seater
        </h1>
        <p className="text-lg text-gray-600 pt-12"><span className="border-b border-gray-400">Shop Now</span></p>

      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0  flex justify-center">
        <Image
          src="/hersofa.png"
          alt="Hero"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </section>
  );
}
