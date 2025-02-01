"use client";
import React from "react";
import Image from "next/image";
import { BlogPost } from "../types";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="lg:w-1/2 lg:ml-12">
      {posts.map((post, index) => (
        <div key={index}>
          <Image
            src={post.src}
            alt={post.title}
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full hover:scale-105"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src="/images/user.svg" alt="user-img" width={20} height={20} />
            <h3 className="text-[#333333] text-sm lg:text-base">Admin</h3>
            <Image src="/images/briefcase.svg" alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#333333] text-sm lg:text-base">{post.date}</h3>
            <Image src="/images/wood.svg" alt="wood-img" width={20} height={20} />
            <h3 className="text-[#333333] text-sm lg:text-base">{post.category}</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">{post.title}</h1>
          <p className="text-[#333333] mb-8 text-sm lg:text-base">{post.excerpt}</p>
          <span className="border-b border-black text-sm cursor-pointer">Read More</span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
