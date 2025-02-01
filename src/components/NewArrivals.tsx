import Link from "next/link";
import Image from "next/image"
export default function NewArrivals(){
    return (
        <div className="mx-auto py-12 px-4 sm:px-6 md:px-16 lg:px-32 flex flex-col md:flex-row bg-lightyellow justify-center items-center">
            <div className="object-cover">
                <Image src={"/Asgaardsofa.png"} alt="newarrivalpic" height={800} width={983}></Image>
            </div>
            <div className="flex flex-col text-center space-y-8">
                <p className="text-md">New Arrivals</p>
                <h2 className="text-4xl font-bold">Asgaard Sofa</h2>
                <Link href={"/"}><button className="h-[64px] w-64 text-center text-md border-2 border-black">Order Now</button></Link>
            </div>
        </div>
    )
}