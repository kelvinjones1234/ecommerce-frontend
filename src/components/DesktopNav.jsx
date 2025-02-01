import React, { useState } from "react";
import { RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu";

const DesktopNav = () => {
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div
      className="relative mx-auto px-4 lg:px-8 xl:px-[4rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="flex gap-x-[2rem] justify-between items-center py-5">
          <div className="left hover:text-black text-left font-bold uppercase tracking-wider">
            <h1>Madu</h1>
            <h2>Pet</h2>
            <h3>Exclusive</h3>
          </div>

          <div className="middle">
            <DesktopMenu />
          </div>

          <div className="right flex items-center gap-x-5">
            <button aria-label="Search" className="hover:text-black">
              <RiSearchLine size={20} />
            </button>

            <button
              aria-label="Account"
              className="hidden lg:block hover:text-black"
            >
              <VscAccount size={20} />
            </button>

            <button aria-label="Shopping Cart" className="hover:text-black">
              <RiShoppingCart2Line size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
