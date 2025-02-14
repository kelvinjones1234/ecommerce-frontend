import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useFilter } from "../context/FilterContext";
import { motion, AnimatePresence } from "framer-motion";

const FilterSlide = ({ isOpen, close }) => {
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
      {isOpen && screenWidth < 750 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          className="h-screen w-[50%] bg-white z-[4000] fixed top-0 right-0 shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-sm text-gray-600 text-center w-full">
              <p className="font-semibold">Filter and sort</p>
              <p className="text-xs text-gray-400">57 products</p>
            </div>
            {/* <button onClick={close} className="p-2">
              <X size={20} />
            </button> */}
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              onClick={close}
            >
              <X size={20} />
            </button>
          </div>

          {/* Filter Options */}
          <div className="p-4 space-y-4">
            <div className="border-b py-3 flex justify-between items-center">
              <p className="text-sm">Product type</p>
              <span className="text-gray-500">→</span>
            </div>

            <div className="border-b py-3 flex justify-between items-center">
              <p className="text-sm">Brand</p>
              <span className="text-gray-500">→</span>
            </div>

            <div className="border-b py-3 flex justify-between items-center">
              <p className="text-sm">Colour</p>
              <span className="text-gray-500">→</span>
            </div>

            <div className="border-b py-3 flex justify-between items-center">
              <p className="text-sm">Sort by</p>
              <select className="text-sm text-gray-600">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-0 w-full">
            <button className="w-full bg-black text-white py-3 text-center text-sm font-semibold">
              APPLY
            </button>
            <button className="w-full py-3 text-center text-sm text-gray-500">
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterSlide;
