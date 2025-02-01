"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlogList from "@/components/BlogList";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import { BlogPost } from "../../scripts/types";

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 3;

  const blogPosts: BlogPost[] = [
    { src: "/images/laptop.png", title: "Going all-in with millennial design", date: "14 Oct 2022", category: "Wood", excerpt: "Lorem ipsum dolor sit amet..." },
    { src: "/images/drawing.png", title: "Exploring new ways of decorating", date: "14 Oct 2022", category: "Wood", excerpt: "Lorem ipsum dolor sit amet..." },
    { src: "/images/book.png", title: "Handmade pieces that took time to make", date: "14 Oct 2022", category: "Wood", excerpt: "Lorem ipsum dolor sit amet..." },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const displayedPosts = blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
      <div>
        <Image src="/images/blog.png" alt="blog" width={1440} height={316} className="w-full h-auto mt-20" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start px-4 lg:px-0">
        <BlogList posts={displayedPosts} />
        <Sidebar recentPosts={blogPosts} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
};

export default BlogPage;
