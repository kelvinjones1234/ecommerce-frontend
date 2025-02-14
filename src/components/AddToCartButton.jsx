import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AddToCartButton = ({
  label = "ADD TO CART",
  isFloating = false,
  onClick = () => {},
  className = "",
  containerClassName = "",
  animationClassName = "hover:before:translate-x-full hover:before:opacity-100",
  textClassName = "",
  bgClassName = "bg-black text-white",
  hoverClassName = "hover:bg-gray-950",
  type = "button",
  width,
}) => {
  if (isFloating) {
    return (
      <motion.button
        className={`absolute bottom-4 right-4 rounded-full bg-black p-2 ${className}`}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
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
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width }}
      className={`
        ${containerClassName}
        ${bgClassName}
        ${hoverClassName}
        outline-0 h-[3rem]
        transition-all duration-500 ease-in-out
        group relative overflow-hidden
        uppercase text-[.8rem] tracking-[.2rem]
        before:content-[''] 
        before:absolute 
        before:top-0 
        before:left-0 
        before:w-full 
        before:h-full 
        before:bg-gradient-to-r 
        before:from-transparent 
        before:via-white/50  
        before:to-transparent 
        before:opacity-100   
        before:transition-all 
        before:duration-700 
        before:-translate-x-full
        ${animationClassName}
        ${className}
      `}
    >
      <span className={textClassName}>{label}</span>
    </button>
  );
};

export default AddToCartButton;
