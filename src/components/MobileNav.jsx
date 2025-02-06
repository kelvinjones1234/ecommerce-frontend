import {
  RiMenu2Line,
  RiSearchLine,
  RiCloseLargeLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

const MobileNav = ({ menuToggle, onMenuToggle }) => {
  const { toggleCart } = useCart();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="left flex-1" onClick={onMenuToggle}>
            {menuToggle ? (
              <RiCloseLargeLine size={20} color="gray" />
            ) : (
              <RiMenu2Line size={20} />
            )}
          </div>
          <div className="middle flex-[2] flex justify-center">
            Madu<br></br>Pet<br></br>Exclusive
          </div>
          <div className="right flex items-center justify-between gap-7 flex-1">
            <div className="p-2 cursor-pointer">
              <RiSearchLine size={20} />
            </div>
            <div className="hidden lg:block p-2 cursor-pointer">
              <VscAccount scale={35} />
            </div>
            <div
              className="cursor-pointer p-2"
              size={20}
              onClick={() => {
                toggleCart();
              }}
            >
              <RiShoppingCart2Line />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={menuToggle} onClose={onMenuToggle} />
    </>
  );
};

export default MobileNav;
