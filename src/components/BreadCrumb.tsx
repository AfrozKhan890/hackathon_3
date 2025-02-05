import Image from "next/image"
import Link from "next/link";
interface BreadCrumbProps {
    title:string,
    url:string
}
export default function BreadCrumb (props:BreadCrumbProps){
    return(
    <div className="flex justify-center items-center bg-[url('/bgbreadcrumb.png')] h-[318px] w-full">
        <div className="flex flex-col justify-center items-center">
            <Image src={"/logo.png"} alt="Logo" width={50} height={50}></Image>
            <h1 className="text-4xl">{props.title}</h1>
            <p className="flex gap-4"> <Link href={"/"}>Home</Link> <span>/</span> <Link href={`/${props.url}`}>{props.title}</Link></p>
        </div>
    </div>
    )

}