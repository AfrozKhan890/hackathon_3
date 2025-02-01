import React from "react"; 
import { BiFilterAlt } from "react-icons/bi"; 
import { BsGridFill, BsViewList } from "react-icons/bs";

interface FilterProps {
  onSortChange: (order: string) => void;
  onShowChange: (count: number) => void;
}

export default function Filter({ onSortChange, onShowChange }: FilterProps) {
  return (
    <div className="bg-[#FAF4F4] flex justify-center items-center w-full">
      <div className="md:h-[90px] h-[50px] gap-24 flex max-w-7xl justify-between items-center md:px-20 px-8 mt-6 md:mt-10">
        
        <div className="flex justify-center items-center gap-2 md:gap-4 text-[16px]">
          <BiFilterAlt />
          <p className="text-[10px] md:text-[16px]">Filter</p>
          <BsGridFill />
          <BsViewList />
          <p>|</p>
          <p className="text-[10px] md:text-[16px]">Showing Results</p>
        </div>

        <div className="hidden md:flex justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[16px] font-medium">
          <p>Show</p>
          <select
            className="text-[#9F9F9F] bg-white px-4 py-3 cursor-pointer"
            onChange={(e) => onShowChange(parseInt(e.target.value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16" selected>16</option>
            
          </select>

          <p>Sort By</p>
          <select
            className="text-[#9F9F9F] bg-white px-10 py-2 cursor-pointer"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
