"use client";
import React from "react";
import Image from "next/image";
import { BlogPost } from "../types";

interface SidebarProps {
  recentPosts: BlogPost[];
}

const Sidebar: React.FC<SidebarProps> = ({ recentPosts }) => {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
      {/* Search Bar */}
      <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 botext-[#333333] rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
        <button className="text-gray-500 hover:text-black">
          <Image src="/images/research.svg" alt="search-img" width={20} height={20} />
        </button>
      </div>

      {/* Categories */}
      <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
      <div className="space-y-4 lg:space-y-6">
        {categories.map((category) => (
          <div key={category.name} className="flex justify-between text-sm lg:text-base">
            <h3>{category.name}</h3>
            <span>{category.count}</span>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <h1 className="text-[24px] font-semibold mb-8">Recent Posts</h1>
      <div className="space-y-6">
        {recentPosts.slice(0, 5).map((post, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Image
              src={post.src}
              alt={`Image of ${post.title}`}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-[14px] w-[200px]">{post.title}</h2>
              <span className="text-[#333333]">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
