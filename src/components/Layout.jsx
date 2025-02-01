import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import ScrollHandler from "../utils/ScrollHandler";

const Layout = ({ children }) => {
  return (
    <ScrollHandler>
      {({ scrolled, isScrollingUp, navbarVariants }) => (
        <>
          <motion.div
            className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem]"
            initial="hidden"
            animate="visible"
          >
            <span>December sale is currently on...</span>
          </motion.div>

          <AnimatePresence>
            {scrolled && isScrollingUp && (
              <motion.div
                className="fixed bg-white top-0 left-0 right-0 z-[500] shadow"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={navbarVariants}
              >
                <Navbar />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-0 left-0 right-0 z-[100]">
            <Navbar />
          </div>

          <main>{children}</main>

          <section className="footer relative top-[15rem] lg:top-0">
            <h2 className="text-center text-[1.5rem] p-8">
              Follow us on Instagram
            </h2>
            <div className="lg:hidden">
              <MobileFooter />
            </div>
            <div className="hidden lg:block">
              <DesktopFooter />
            </div>
          </section>
        </>
      )}
    </ScrollHandler>
  );
};

export default Layout;
