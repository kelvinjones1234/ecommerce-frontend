import { createContext, useState, useContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ menuToggle, handleMenuToggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
