import React, { useEffect, useRef, useState } from "react";
import { RiFilter3Line, RiShoppingCart2Line } from "react-icons/ri";
import { ChevronDown, Search, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCT_TYPES = [
  { name: "Cat Harness", count: 2 },
  { name: "Dog Accessory", count: 2 },
  { name: "Dog Bag", count: 1 },
  { name: "Dog Bed", count: 3 },
  { name: "Dog Blanket", count: 4 },
  { name: "Dog Bottle", count: 3 },
];

const BRANDS = [
  { name: "Animals Like Us", count: 4 },
  { name: "Bowl&Bone Republic", count: 2 },
  { name: "Dog By Dr Lisa", count: 5 },
  { name: "Harlow Harry", count: 1 },
  { name: "Hello + Wolf", count: 4 },
  { name: "MiaCara", count: 12 },
];

const COLORS = [
  { name: "Black", count: 8 },
  { name: "Brown", count: 1 },
  { name: "Grey", count: 3 },
  { name: "Peach Fuzz", count: 1 },
  { name: "White", count: 1 },
];

const Collections = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    productType: true,
    brand: true,
    color: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const container = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const cartButtonVariants = {
    initial: { y: "100%", opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const FilterSection = ({ title, items, section }) => (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => toggleSection(section)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium">{title}</span>
        {expandedSections[section] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      <button className="mt-2 text-xs text-gray-500 hover:text-gray-800">
        Reset
      </button>
      {expandedSections[section] && (
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <label
              key={item.name}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                {item.name}
              </span>
              <span className="text-xs text-gray-400">({item.count})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="min-h-screen">
      {/* Mobile filter button */}
      <div
        className={`sticky top-0 z-10 bg-white transition-shadow duration-300 lg:hidden ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="px-4 py-4">
          <button className="flex w-full items-center gap-[3rem] bg-black py-3 text-white hover:bg-gray-900">
            <RiFilter3Line size={20} />
            <span className="text-sm font-medium tracking-wider">
              FILTER AND SORT
            </span>
          </button>
        </div>
      </div>

      <div className="lg:flex lg:gap-x-8 lg:mt-[4rem]">
        {/* Scrollable Sidebar */}
        <div className="hidden lg:block lg:w-64">
          <div className="sticky top-0 h-screen custom-scrollbar overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="space-y-1 pb-6">
              <FilterSection
                title="Product type"
                items={PRODUCT_TYPES}
                section="productType"
              />
              <FilterSection title="Brand" items={BRANDS} section="brand" />
              <FilterSection title="Colour" items={COLORS} section="color" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <p className="text-sm text-gray-600 order-2">57 products</p>
            <div className="relative lg:block hidden order-1">
              <button className="flex w-[12rem] items-center justify-between border border-gray-300 px-4 py-2 text-sm hover:border-gray-400">
                <span>SORT BY</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <motion.div
                key={product}
                className="group cursor-pointer"
                variants={item}
                initial="initial"
                whileHover="hover"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <motion.img
                    src="/api/placeholder/300/300"
                    alt="Product"
                    className="h-full w-full object-cover object-center"
                    variants={imageVariants}
                  />
                  <motion.button
                    className="absolute top-2 lg:block hidden right-2 rounded-full bg-white p-2"
                    variants={buttonVariants}
                  >
                    <Search className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    className="absolute lg:hidden bottom-4 right-4 rounded-full bg-black p-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    className="hidden text-[.8rem] lg:block absolute bottom-4 left-0 right-0 bg-black py-3 text-white"
                    variants={cartButtonVariants}
                  >
                    ADD TO CART
                  </motion.button>
                </div>
                <motion.div className="text-center pt-4">
                  <h5 className="uppercase text-[.7rem] text-gray-600">
                    thirty dogs
                  </h5>
                  <h3 className="text-gray-800 text-[.9rem]">
                    Dog Drink Bottle - Peach Buzz
                  </h3>
                  <p className="text-gray-800">85.00</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
