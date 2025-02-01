import Image from "next/image"
import {SecData} from "@/utils/secData";
export default function Card (cardData:SecData){
    return (
        <div className="h-[400px] w-[250px]">
            <div className="h-[287px] w-[250px]  flex justify-center items-center object-cover">
                <Image src={cardData.image} alt="card" width={500} height={500}></Image>
            </div>
            <p className="text-sm">{cardData.title}</p>
            <h2 className="text-2xl ">Rs. {cardData.price}.00</h2>

        </div>
    )
}