import Image from "next/image";

export default function HeroTwo(){
  const categories = ["Dining", "Living", "Bedroom"];

  return (
    <section className="py-10">
      <h1 className="text-[#333333] text-2xl sm:text-3xl font-bold text-center mt-10">
        Browse The Range
      </h1>
      <p className="text-center text-[#555555] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-wrap items-center justify-center mt-16 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center max-w-[300px] sm:max-w-full">
            <Image
              src={`/images/img${index + 1}.png`}
              alt={`Explore our ${category} collection`}
              width={381}
              height={480}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              quality={75}
              loading="lazy"
            />
            <h2 className="text-center text-xl sm:text-2xl font-medium mt-6 text-[#333333]">
              {category}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

