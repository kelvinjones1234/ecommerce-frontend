import { useState, useEffect } from "react";
import { RiMenu2Line, RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/CartContext";

const MobileNav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { toggleCart } = useCart();

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev); // Toggle the state
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounting
    };
  }, [menuToggle]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8">
        <div className="navs-and-logo flex justify-between items-center py-3">
          <div className="left flex-1" onClick={handleMenuToggle}>
            <RiMenu2Line size={20} />
          </div>
          <div className="middle flex-[2] flex justify-center">
            Madu<br></br>Pet<br></br>Exclusive
          </div>
          <div className="right flex items-center justify-between gap-7 flex-1">
            <RiSearchLine size={20} />
            <VscAccount scale={35} className="hidden lg:block" />
            <RiShoppingCart2Line
              size={20}
              onClick={() => {
                toggleCart();
              }}
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={menuToggle} onClose={handleMenuToggle} />
    </>
  );
};

export default MobileNav;
