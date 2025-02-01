import React, { useEffect, useRef } from "react";

const DesktopMenu = ({ isOpen, onClose }) => {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Books" },
    { id: 5, name: "Beauty" },
  ];

  return (
    <div>
      <div>
        <div className="list-none uppercase justify-center flex text-[.9rem]">
          {categories.map((items) => (
            <li key={items.id} className="mx-3">
              {items.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
