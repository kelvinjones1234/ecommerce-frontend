import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AddToCartButton = ({ label, isFloating, onClick, className }) => {
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
      className={`w-full tracking-[.2rem] border border-black text-black text-[.9rem] py-4 rounded-lg hover:bg-black hover:text-white transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

AddToCartButton.propTypes = {
  label: PropTypes.string,
  isFloating: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

AddToCartButton.defaultProps = {
  label: "ADD TO CART",
  isFloating: false,
  onClick: () => {},
  className: "",
};

export default AddToCartButton;
