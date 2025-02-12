import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const Icon = ({ className = "", onClick, icon: Icon = "", iconSize = 20 }) => {
  return (
    <button
      className={` p-2 transition-all duration-200 ease-in-out transform hover:scale-105 inline-flex ${className}`}
    >
      <Icon size={iconSize} />
    </button>
  );
};

export default Icon;
