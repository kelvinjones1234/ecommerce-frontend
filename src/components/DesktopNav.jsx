import React, { useState } from "react";
import { RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu";
import Icon from "./Icon";
import { useMenu } from "../context/MenuContext";

const DesktopNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { searchToggle, handleSearchToggle } = useMenu();

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
      <div
        className={`absolute h-full z-[10000] w-full inset-0 bg-white text-black ${
          !searchToggle && "hidden"
        }`}
      >
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
            <div
              aria-label="Search"
              className="hover:text-black cursor-pointer"
              onClick={handleSearchToggle}
            >
              <Icon icon={RiSearchLine} />
            </div>

            <button
              aria-label="Account"
              className="hidden lg:block hover:text-black"
            >
              <Icon icon={VscAccount} />
            </button>

            <button aria-label="Shopping Cart" className="hover:text-black">
              <Icon icon={RiShoppingCart2Line} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
