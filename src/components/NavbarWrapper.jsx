import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ScrollNavbar from "./ScrollNavbar";

const NavbarWrapper = ({
  scrolled,
  isScrollingUp,
  navbarVariants,
  menuToggle,
  onMenuToggle,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && isScrollingUp ? (
        <motion.div
          className={`fixed bg-white text-black top-0 left-0 right-0 z-[500] shadow`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navbarVariants}
        >
          <Navbar />
          {/* <ScrollNavbar /> */}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavbarWrapper;
