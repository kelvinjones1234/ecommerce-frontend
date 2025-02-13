import React from "react";
import { X } from "lucide-react";
import { useFilter } from "../context/FilterContext";

const FilterSlide = () => {
  const { closeFilter } = useFilter();

  return (
    <div className="absolute bg-black bg-opacity-50 flex justify-end">
      <div className="w-full max-w-lg bg-white h-full p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="text-sm text-gray-500 text-center w-full">
            Filter and sort
          </div>
          <button
            onClick={closeFilter}
            className="text-gray-500 hover:text-black"
          >
            <X size={24} />
          </button>
        </div>

        {/* Product Count */}
        <div className="text-center text-gray-500 text-sm mt-2">
          57 products
        </div>

        {/* Filter Sections */}
        <div className="mt-6 space-y-4">
          {["Product type", "Brand", "Colour"].map((filter) => (
            <div
              key={filter}
              className="flex justify-between items-center border-b py-4 text-lg cursor-pointer"
            >
              <span>{filter}</span>
              <span className="text-gray-500">&rarr;</span>
            </div>
          ))}

          {/* Sort By Dropdown */}
          <div className="flex justify-between items-center border-b py-4 text-lg">
            <span>Sort by</span>
            <select className="text-gray-700 focus:outline-none">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t flex justify-between items-center">
          <button className="text-gray-500">Clear</button>
          <button className="bg-black text-white py-2 px-6 rounded-md">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSlide;
