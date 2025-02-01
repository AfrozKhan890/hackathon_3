import Image from "next/image"
import Link from "next/link"
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";


export default function BlogCard (carddata:{image:string}){
    return (
        <div className=" h-[555px] flex flex-col justify-center items-center space-y-5">
            <div >
            <Image src={carddata.image} alt="rectangle" height={290} width={290} className="rounded-lg"></Image>
            </div>
            <p>Going All In With Milenial Design</p>
            <div className="pt-4">
            <span className="border-b-2 text-4xl border-black"><Link href={"/"}>Read More</Link></span>
            </div>
            <div className="flex gap-4">
                <p className="flex gap-2"><GoClock/> 5 min</p>
                <p className="flex gap-2"><SlCalender/> 12th oct 2022</p>
            </div>
        </div>
    )
}