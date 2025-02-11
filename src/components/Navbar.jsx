import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import NavbarWrapper from "./NavbarWrapper";
import { useMenu } from "../context/MenuContext";

const Navbar = () => {
  // const { menuToggle, handleMenuToggle } = useMenu();
  return (
    <>
      <div className="xl:hidden">
        <MobileNav  />
      </div>
      <div className="hidden xl:block">
        <DesktopNav />
      </div>
    </>
  );
};
export default Navbar;
