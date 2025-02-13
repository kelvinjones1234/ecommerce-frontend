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
import Icon from "./Icon";

const MobileNav = () => {
  const { toggleCart } = useCart();
  const [width, setWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const { menuToggle, handleMenuToggle, searchToggle, handleSearchToggle } =
    useMenu();

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
      <div
        className={`absolute h-full z-[10000] w-full inset-0 bg-white text-black ${
          !searchToggle && "hidden"
        }`}
      >
        {/* Search bar */}
        <div className="relative w-full h-full flex items-center px-8">
          <RiSearchLine size={20} className="absolute left-[3rem]" />
          <input
            type="text"
            className="bg-gray-100 w-full h-[3rem] outline-0 rounded-xl px-[3rem]"
            placeholder="Search"
          />
        </div>
      </div>
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
        relative z-[100] 
        ${isHovered && "text-black"}
      `}
      >
        <div
          className={`max-w-7xl mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8 ${
            menuToggle && "text-black"
          }`}
        >
          <div className="navs-and-logo flex justify-between items-center py-3">
            <div className="left flex-1" onClick={handleMenuToggle}>
              {menuToggle ? (
                <Icon
                  icon={RiCloseLargeLine}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full"
                />
              ) : (
                <Icon icon={RiMenu2Line} className="" />
              )}
            </div>

            <div className="middle flex-[2] flex text-center font-thin uppercase tracking-wider justify-center">
              Exclusive<br></br>Pet<br></br>Store
            </div>
            <div className="right flex items-center justify-between gap-7 flex-1">
              <div className="cursor-pointer" onClick={handleSearchToggle}>
                <Icon className="" icon={RiSearchLine} />
              </div>
              <div className="hidden lg:block cursor-pointer">
                <Icon icon={VscAccount} className="" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  toggleCart();
                }}
              >
                <Icon icon={RiShoppingCart2Line} className="" />
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
