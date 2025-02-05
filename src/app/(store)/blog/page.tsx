import Image from "next/image";
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import Button from "@/components/Button";
export default function BlogAbout() {
  const blogs = [
    {
      title: "Going all-in with millennial design",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Wood",
      image: "/blogsec/Rectangle1.png", 
      description: "Lorem ipsumipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. magna aliqua. magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "Read more",
    },
    {
      title: "Exploring new ways of decorating",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Interior",
      image: "/blogsec/Rectangle2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "Read more",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Wood",
      image: "/blogsec/Rectangle3.png",
      description: "Lorem ipsum dolor sit amet,ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.labore et dolore magna aliqua. consectetur adipiscing elit. Integer nec odio.",
      readMoreLink: "Read more",
    },
  ];

  const Images =[
    {
        title: "Going all-in with millennial design",
       image: '/blogsec/post1.jpg'
    },
    {
        title: "Exploring new ways of decorating",
        image: '/blogsec/post2.jpg'
    },
    {
        title: "Handmade pieces that took time to make",
        image: '/blogsec/post3.jpg'
    },
    {
        title: 'Modern Home in Milan',
        image: '/blogsec/post4.jpg'
    },
    {
        title: "Colorful Office Redesigned",
        image: '/blogsec/post5.jpg'
    },
]
return (
    <main>
        <BreadCrumb title="Blog" url="blog"/>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6 lg:px-36 px-6">
        <div className="space-y-7 lg:w-3/4 w-full my-12">
          {blogs.map((blog, index) => (
            <div key={index} >
              <Image 
                className="rounded-lg"
                src={blog.image}
                alt="blog image"
                width={580}
                height={500}
              />
              <h3 className="mt-3 space-x-7 text-gray-500">
                <i className="fa-regular fa-user"></i><span> {blog.author} </span>  
                <span><i className="fa-regular fa-calendar-days"></i> {blog.date}</span>
                <span><i className="fa-solid fa-tag"></i> {blog.category}</span>
              </h3>
              <h2 className="mt-3 text-2xl font-semibold">{blog.title}</h2>
              <p className="mt-2 xl:w-[550px]">{blog.description}</p>
              <button className="underline underline-offset-[12px] mt-6">
                {blog.readMoreLink}
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-1/4 w-full flex flex-col items-start mt-6 lg:mt-0">
          <div className="relative w-full bg-[#f5f5f5] rounded">
            <input
              className="w-full h-12 bg-transparent rounded pl-4 pr-12 outline-none"
              type="search"
              placeholder="Search blogs..."
            />
          </div>

          <h2 className="text-xl font-semibold mt-6">Category</h2>
          <ul className="mt-7 space-y-5 text-gray-500">
            <li>Crafts <span className="float-right">2</span></li>
            <li>Design <span className="float-right">8</span></li>
            <li>HandMade <span className="float-right">7</span></li>
            <li>Interior <span className="float-right">1</span></li>
            <li>Wood <span className="float-right">6</span></li>
          </ul> 

          <h2 className="text-2xl mt-6">Recent Posts</h2>
          <div className="block mt-6">
            {Images.map((image, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <Image
                  className="rounded"
                  src={image.image}
                  alt=""
                  width={100}
                  height={100}
                />
                <span className="text-lg font-medium">{image.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button name='1' style="w-10 h-10 bg-[#fbebb5] rounded"/>
        <Button name='2' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='3' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='Next' style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
      </div>
      <br />
      <br />
    </main>
  );
}