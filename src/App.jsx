import AppContent from "./AppContent";
import { CartProvider } from "./context/CartContext";
import NavbarWrapper from "./components/NavbarWrapper";

function App() {
  return (
    <>
      <CartProvider>
        <NavbarWrapper />
        <AppContent />
      </CartProvider>
    </>
  );
}

export default App;