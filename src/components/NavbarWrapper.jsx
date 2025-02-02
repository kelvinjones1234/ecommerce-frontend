import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const NavbarWrapper = ({ scrolled, isScrollingUp, navbarVariants }) => {
  return (
    <AnimatePresence>
      {scrolled && isScrollingUp && (
        <motion.div
          className="fixed bg-white top-0 left-0 right-0 z-[500] shadow"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navbarVariants}
        >
          <Navbar />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarWrapper;
