import React from "react";
import MobileFooter from "../components/MobileFooter";
import DesktopFooter from "../components/DesktopFooter";

const Footer = ({ top, instagram_cta }) => {
  return (
    <section className={`footer relative ${top} lg:top-0`}>
      <h2 className="text-center text-[1.5rem] p-8">{instagram_cta}</h2>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:block">
        <DesktopFooter />
      </div>
    </section>
  );
};

export default Footer;
