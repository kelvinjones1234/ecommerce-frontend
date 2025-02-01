import React, { useState, useEffect, useRef } from "react";
import { TfiHome } from "react-icons/tfi";
import { RiMenu2Line, RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";

const FooterMenu = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const lastScrollY = useRef(0); // Ref to store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the footer menu only when scrolling down
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(true); // Scrolling down
      } else {
        setIsVisible(false); // Scrolling up
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed bottom-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <ul className="flex w-full justify-between px-4 uppercase">
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <TfiHome size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Home</h5>
          </li>
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <RiMenu2Line size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Menu</h5>
          </li>
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <RiSearchLine size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Search</h5>
          </li>
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <RxDashboard size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Shop</h5>
          </li>
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <RiShoppingCart2Line size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Cart</h5>
          </li>
          <li className="flex flex-col justify-center gap-y-1 items-center">
            <VscAccount size={20} color="gray" />
            <h5 className="text-gray-700 text-[.6rem]">Account</h5>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterMenu;
