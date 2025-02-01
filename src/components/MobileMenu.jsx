import React, { useEffect, useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null); // Ref for the side menu

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach event listener when the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup the event listener
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
    <div
      ref={menuRef}
      className={`uppercase list-none bg-white z-[300] top-0 h-screen absolute w-[80%] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div>
        <div className="border-b-[.05rem] border-gray-500">
          <div
            className="ml-5 my-4 rounded-full bg-gray-200 p-2 inline-block"
            onClick={onClose}
          >
            <RiCloseLargeLine size={20} color="gray" />
          </div>
        </div>
        <div className="ml-5">
          {categories.map((items) => (
            <li
              key={items.id}
              className="py-5 border-b-[.05rem] text-black border-gray-500"
            >
              {items.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
