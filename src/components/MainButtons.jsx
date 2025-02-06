import React from "react";
import PropTypes from "prop-types";

const MainButtons = ({
  children,
  containerClassName,
  animationClassName = "hover:before:translate-x-full hover:before:opacity-100",
  textClassName,
  bgClassName = "bg-black text-white",
  hoverClassName = "hover:bg-gray-950",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${containerClassName}
        ${bgClassName}
        ${hoverClassName}
        outline-0 w-full h-[3rem]
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
        before:via-white/20 
        before:to-transparent 
        before:opacity-0 
        before:transition-all 
        before:duration-700 
        before:-translate-x-full
        ${animationClassName}
      `}
    >
      <span className={textClassName}>{children}</span>
    </button>
  );
};

MainButtons.propTypes = {
  children: PropTypes.node.isRequired,
  animationClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  textClassName: PropTypes.string,
  bgClassName: PropTypes.string,
  hoverClassName: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset", "sign in"]),
};

export default MainButtons;
