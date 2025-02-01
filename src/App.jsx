import AppContent from "./AppContent";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </>
  );
}

export default App;
