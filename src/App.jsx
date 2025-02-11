import AppContent from "./AppContent";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import MessageBar from "./components/MessageBar";
import { useState, useEffect } from "react";
import NavbarWrapper from "./components/NavbarWrapper";
import { MenuProvider } from "./context/MenuContext";
function App() {
  return (
    <>
      <CartProvider>
        <MenuProvider>
          <AppContent />
        </MenuProvider>
      </CartProvider>
    </>
  );
}

export default App;
