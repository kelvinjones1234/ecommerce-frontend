import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import NavbarWrapper from "./NavbarWrapper";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <>
      <NavbarWrapper menuToggle={menuToggle} />
      <div className="xl:hidden">
        <MobileNav menuToggle={menuToggle} onMenuToggle={handleMenuToggle} />
      </div>
      <div className="hidden xl:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;
