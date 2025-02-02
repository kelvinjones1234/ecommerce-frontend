import { useEffect } from "react";
import { useCart } from "./context/CartContext";
import CartSlide from "./components/CartSlide";
import ProductDetailPage from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";

function AppContent() {
  const { isCartOpen, closeCart } = useCart();

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounting
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay with fade animation */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1999] transition-opacity duration-300 ease-in-out ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => closeCart()}
        aria-hidden="true"
      />

      {/* Cart Slide with slide animation */}
      <div
        className={`fixed right-0 top-0 h-full w-80 z-[2000] transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartSlide />
      </div>

      {/* Main content */}
      <ProductDetailPage />
      {/* <HomePage /> */}
    </>
  );
}

export default AppContent;
