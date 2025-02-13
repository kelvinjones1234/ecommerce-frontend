import AppContent from "./AppContent";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import MessageBar from "./components/MessageBar";
import { useState, useEffect } from "react";
import NavbarWrapper from "./components/NavbarWrapper";
import { MenuProvider } from "./context/MenuContext";
import { FilterProvider } from "./context/FilterContext";
function App() {
  return (
    <>
      <FilterProvider>
        <CartProvider>
          <MenuProvider>
            <AppContent />
          </MenuProvider>
        </CartProvider>
      </FilterProvider>
    </>
  );
}

export default App;
