import Image from "next/image"

export default function Social(){
return(
    <div>
    <section className="h-auto mt-32 px-6 md:px-16 lg:px-32">
<h1 className="text-center text-[18px] sm:text-[20px]">Share your setup with</h1>
<h1 className="text-center text-[30px] sm:text-[40px] font-bold">
  #FuniroFurniture
</h1>
<div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8">
  {["last1", "last2", "last3", "last4", "last5", "last6", "last7"].map(
    (image, index) => (
      <Image
        key={index}
        src={`/images/${image}.png`}
        alt={image}
        width={index === 2 ? 295 : index === 6 ? 425 : 451}
        height={index === 2 ? 392 : index === 6 ? 423 : 312}
        className={index === 6 ? "mb-52" : "mb-5"}
      />
    )
  )}
</div>
</section>
    </div>
)
}