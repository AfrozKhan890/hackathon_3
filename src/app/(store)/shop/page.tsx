"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { CardData } from "@/utils/types";
import Button from "@/components/Button";

export default function Shop() {
  const [data, setData] = useState<CardData[]>([]);
  const [filteredData, setFilteredData] = useState<CardData[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const products: CardData[] = await response.json();
      setData(products);
      setFilteredData(products);
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(category, itemsPerPage, sortBy);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    filterProducts(selectedCategory, items, sortBy);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
    filterProducts(selectedCategory, itemsPerPage, sortBy);
  };

  const filterProducts = (category: string, itemsPerPage: number, sortBy: string) => {
    let filtered = [...data];
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    switch (sortBy) {
      case "price-low-to-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "a-to-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-to-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    setFilteredData(filtered.slice(0, itemsPerPage));
  };

  return (
    <div>
      <BreadCrumb title="Shop" url="shop" />
      <Filter
        onCategoryChange={handleCategoryChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        onSortChange={handleSortChange}
        FilteredData={filteredData}
      />
      <div className="flex w-full justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredData.map((cardData) => (
            <Card key={cardData._id} {...cardData} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        {[1, 2, 3].map((num) => (
          <Button key={num} name={num.toString()} style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
        ))}
        <Button name="Next" style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
      </div>
      <Service />
    </div>
  );
}
