import {
  RiMenu2Line,
  RiSearchLine,
  RiCloseLargeLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { motion } from "framer-motion"; // Import motion from framer-motion
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useMenu } from "../context/MenuContext";

const MobileNav = () => {
  const { toggleCart } = useCart();
  const [width, setWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const { menuToggle, handleMenuToggle } = useMenu();

  const navVariants = {
    initial: { scaleY: 0 },
    hover: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (width > 750) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (width > 750) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="relative mx-auto px-4 lg:px-8 xl:px-[4rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sliding white background */}
      <motion.div
        className="absolute inset-0 bg-white z-0"
        variants={navVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{
          transformOrigin: "top",
          height: "100%",
          width: "100%",
        }}
      />

      {/* Navigation content */}
      <div
        className={`
        relative z-10 
        ${isHovered && "text-black"}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8">
          <div className="navs-and-logo flex justify-between items-center py-3">
            <div className="left flex-1" onClick={handleMenuToggle}>
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
                <VscAccount size={20} />{" "}
                {/* Corrected prop from scale to size */}
              </div>
              <div
                className="cursor-pointer p-2"
                onClick={() => {
                  toggleCart();
                }}
              >
                <RiShoppingCart2Line size={20} /> {/* Moved size prop here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={menuToggle} onClose={handleMenuToggle} />
    </div>
  );
};

export default MobileNav;
