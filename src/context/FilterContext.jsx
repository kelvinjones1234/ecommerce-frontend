import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const handleFilterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };


  return (
    <FilterContext.Provider
      value={{ handleFilterToggle, isFilterOpen }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
