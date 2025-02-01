"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
      {pages.map((page) => (
        <div
          key={page}
          className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center cursor-pointer ${
            page === currentPage ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;