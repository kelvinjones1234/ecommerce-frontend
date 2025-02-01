import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <>
      <div className="xl:hidden">
        <MobileNav />
      </div>
      <div className="hidden xl:block">
        <DesktopNav />
      </div>

      {/* <div className="">
        <MobileNav />
      </div> */}
    </>
  );
};

export default Navbar;
