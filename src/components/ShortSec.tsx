import Card from "@/components/Card";
import { CardData } from "@/utils/types";
import Link from "next/link";




export interface Sectiondata {
    title:string,
    description?:string,
    cardData:CardData[],

}

export default  function ShortSec(data:Sectiondata) {
 

  return (
    <div className="mx-auto px-4 sm:px-4 md:px-8 lg:px-12 w-full flex justify-center items-center">
      <div className="space-y-8 w-full flex flex-col justify-center items-center py-8">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        {data.description && <p className="text-sm text-gray-600">{data.description}</p>}
        <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
          {data.cardData.map((cardData: CardData, index:number) => (
          
            <Card key={index} {...cardData} />
          
          ))}
        </div>
        <div>
            <Link href={"/shop"}><span className="text-xl text-black border-b-2 font-semibold  border-black">View More</span></Link>
        </div>
      </div>
    </div>
  );
}



 