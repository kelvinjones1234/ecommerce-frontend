import { createContext, useState, useContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  const handleSearchToggle = () => {
    setSearchToggle((prev) => !prev);
  };

  return (
    <MenuContext.Provider
      value={{ menuToggle, handleMenuToggle, handleSearchToggle, searchToggle }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
