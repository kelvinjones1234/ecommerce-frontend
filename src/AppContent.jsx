import { useEffect } from "react";
import { useCart } from "./context/CartContext";
import CartSlide from "./components/CartSlide";
import ProductDetailPage from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavbarWrapper from "./components/NavbarWrapper";
import MessageBar from "./components/MessageBar";
import CollectionsPage from "./pages/CollectionsPage";
import { useMenu } from "./context/MenuContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFilter } from "./context/FilterContext";

function AppContent() {
  const { isCartOpen, closeCart } = useCart();
  const { menuToggle, handleMenuToggle, searchToggle, handleSearchToggle } =
    useMenu();
  const { isFilterOpen, handleFilterToggle } = useFilter();

  // Prevent scrolling when cart or menu is open
  useEffect(() => {
    if (isCartOpen || menuToggle || searchToggle || isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, menuToggle, searchToggle, isFilterOpen]);

  // Close cart when its overlay is clicked
  const handleCartOverlayClick = () => {
    if (isCartOpen) closeCart();
  };

  // Close menu when its overlay is clicked
  const handleMenuOverlayClick = () => {
    if (menuToggle) handleMenuToggle(false);
  };

  const handleSearchOverlayClick = () => {
    if (searchToggle) handleSearchToggle(false);
  };

  const handleFilterOverlayClick = () => {
    if (isFilterOpen) handleFilterToggle(false);
  };

  return (
    <Router>
      <>
        {/* Overlay for menu with fade animation */}
        <div
          className={`fixed inset-0 bg-black/50 z-[1] transition-opacity duration-300 ease-in-out ${
            menuToggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleMenuOverlayClick}
          aria-hidden="true"
        />

        <div
          className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ease-in-out ${
            searchToggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleSearchOverlayClick}
          aria-hidden="true"
        />

        {/* Overlay for cart with fade animation */}
        <div
          className={`fixed inset-0 bg-black/50 z-[600] transition-opacity duration-300 ease-in-out ${
            isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleCartOverlayClick}
          aria-hidden="true"
        />

        <div
          className={`fixed inset-0 bg-black/50 z-[600] transition-opacity duration-300 ease-in-out ${
            isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleFilterOverlayClick}
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default AppContent;
