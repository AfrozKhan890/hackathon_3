
import BlogCard from "@/components/BlogCard";

interface BlogSecDAta{
    image:string,

}

const data:BlogSecDAta[] = [
    {
        image:"/blogsec/Rectangle1.png",

    },
    {
        image:"/blogsec/Rectangle2.png",
    },
    {
        image:"/blogsec/Rectangle3.png",
    }
]


export default function BlogSection() {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <div className="space-y-8  flex flex-col justify-center items-center py-8">
        <h1 className="text-4xl font-semibold">Our Blogs</h1>
        <p className="text-sm text-gray-600">Find a bright ideal to suit your taste with our great selection </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((cardData: BlogSecDAta, index) => (
            <BlogCard key={index} image={cardData.image} />
        ))}
        </div>
    
        <div>
            <span className="text-xl text-black border-b-2 font-semibold  border-black">View More</span>
        </div>
      </div>
    </div>
  );
}
