import { CardData } from "@/utils/types";
import React, { useState } from "react"; // Importing React
import { BiFilterAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";

interface FilterProps {
  onCategoryChange: (category: string) => void;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sortBy: string) => void;
  FilteredData: CardData[];
}

export default function Filter({
  onCategoryChange,
  onItemsPerPageChange,
  onSortChange,
  FilteredData,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState("default");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const items = parseInt(e.target.value);
    setItemsPerPage(items);
    onItemsPerPageChange(items);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    onSortChange(sortValue);
  };

  const uniqueCategories = [
    "All Product",
    ...Array.from(new Set(FilteredData.map((product) => product.category))),
  ];

  return (
    <div className="bg-[#FAF4F4] w-full py-6">
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Filter Section */}
        <div className="flex justify-center items-center gap-4 text-sm md:text-base">
          <BiFilterAlt />
          <p className="hidden md:block">Filter</p>
          <div className="flex gap-2 md:gap-4">
            <BsGridFill />
            <BsViewList />
          </div>
          <p>|</p>
          <p className="text-xs md:text-sm">
            Showing 1–{itemsPerPage} of {FilteredData.length} results
          </p>
        </div>

        {/* Controls for Show, Sort, and Category */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-medium">
          {/* Show */}
          <div className="flex items-center gap-2">
            <p>Show</p>
            <select
              className="bg-white text-[#9F9F9F] px-4 py-2 rounded-md"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              {[8, 16, 32].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <p>Sort By</p>
            <select
              className="bg-white text-[#9F9F9F] px-4 py-2 rounded-md"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <p>Category</p>
            <select
              className="bg-white text-[#9F9F9F] px-4 py-2 rounded-md"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {uniqueCategories.map((product, index) => (
                <option key={index} value={product === "All Product" ? "" : product}>
                  {product === "All Product" ? "All Products" : product}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
