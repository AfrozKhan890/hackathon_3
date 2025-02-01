// components/SearchForm.tsx
import React from "react";

interface SearchFormProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchTerm, handleSearchChange }) => {
  return (
    <form className="relative w-max mx-auto">
      <input
        type="search"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="relative peer z-10 bg-transparent w-96 h-12 rounded-full border cursor-pointer hover:cursor-text focus:cursor-text outline-none pl-12"
        placeholder="Search..."
      />
      <img
        src="/images/search-icon.svg"
        alt="search"
        width={24}
        height={24}
        className="w-6 h-6 cursor-pointer absolute inset-y-0 my-auto px-3.4 ml-3 hover:opacity-80"
      />
    </form>
  );
};

export default SearchForm;
