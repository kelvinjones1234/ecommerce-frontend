import React, { useEffect, useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Books" },
    { id: 5, name: "Beauty" },
    { id: 6, name: "Sports & Outdoors" },
    { id: 7, name: "Toys & Games" },
    { id: 8, name: "Automotive" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed uppercase list-none bg-white z-[300] top-0 left-0 lg:top-auto w-[85%] lg:w-[50%] h-screen lg:h-[calc(100vh-100px)] border-t border-black flex flex-col"
        >
          {/* Header Section */}
          <div className="border-b-[.05rem] border-gray-500 lg:hidden min-h-[60px] flex items-center">
            <div
              className="ml-5 rounded-full bg-gray-200 p-2 inline-block cursor-pointer"
              onClick={onClose}
            >
              <RiCloseLargeLine size={20} color="gray" />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-[2rem]">
            <ul className="pl-5">
              {categories.map((items, index) => (
                <motion.li
                  key={items.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`py-5 ${
                    index === 0 ? "border-none" : "border-t border-gray-500"
                  } text-black`}
                >
                  {items.name}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Fixed Bottom Section */}
          <div className="sticky bottom-0 border-t border-black text-black bg-white py-4 px-5 flex justify-between items-center">
            <span>Lorem ipsum.</span>
            <span>Lorem ipsum.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
