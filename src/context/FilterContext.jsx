import React, { createContext, useState, useContext } from "react";
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <FilterContext.Provider
      value={{ handleFilterToggle, toggleFilter, isFilterOpen, closeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
