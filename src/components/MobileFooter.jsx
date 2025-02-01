import React, { useState } from "react";
import FooterMenu from "./FooterMenu";

const MobileFooter = () => {
  // State to manage open/close state of each dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle a dropdown open or closed
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Data for the dropdown menus (you can extend this with actual links/content)
  const dropdownData = [
    {
      name: "COMPANY",
      content: ["About Us", "Careers", "Blog"],
    },
    {
      name: "CUSTOMER CARE",
      content: ["Contact Us", "FAQ", "Returns & Exchanges"],
    },
    {
      name: "SUPPORT",
      content: ["Shipping & Delivery", "Terms & Conditions", "Privacy Policy"],
    },
    {
      name: "SIGN UP TODAY",
      content: [], // No specific content for this one
    },
  ];

  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 mb-[5rem]">
        {dropdownData.map((dropdown) => (
          <div key={dropdown.name} className="border-b border-gray-700">
            <button
              className="flex items-center justify-between w-full py-3 text-left focus:outline-none"
              onClick={() => toggleDropdown(dropdown.name)}
            >
              <span className="text-sm font-medium">{dropdown.name}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 transform ${
                  openDropdown === dropdown.name ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === dropdown.name && (
              <div className="py-2">
                {dropdown.content.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-300 hover:text-white text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <p className="text-xs text-gray-500 text-center py-4">
          © 2024, PraiseMedia. All rights reserved.
        </p>
      </div>
      <FooterMenu />
    </div>
  );
};

export default MobileFooter;
