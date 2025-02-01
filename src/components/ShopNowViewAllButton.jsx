import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShopNowViewAllButton = ({ name, width }) => {
  return (
    <motion.button
      className={`bg-black text-white px-6 py-3 uppercase text-[.8rem] tracking-[.2rem] shadow-md ${width}
      hover:bg-blue-700 transition-colors duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.button>
  );
};

export default ShopNowViewAllButton;
