import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Navbar from "../components/Navbar";
import ShopNowViewAllButton from "../components/ShopNowViewAllButton";
import img_one from "../assets/img/three.jpeg";
import ScrollHandler from "../utils/ScrollHandler";
import Collections from "../components/Collections";
import MobileFooter from "../components/MobileFooter";
import DesktopFooter from "../components/DesktopFooter";
import FooterMenu from "../components/FooterMenu";
import Footer from "../components/Footer";

const CollectionsPage = () => {
  return (
    <ScrollHandler>
      {({ scrolled, isScrollingUp, navbarVariants, heroContentVariants }) => (
        <>
          {/* Message Bar */}
          <motion.div
            className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem] px-[1.5rem] lg:px-[5rem]"
            initial="hidden"
            animate="visible"
          >
            <HiChevronLeft size={20} color="white" />
            december sale is currently on...
            <HiChevronRight size={20} color="white" />
          </motion.div>

          {/* Animated Navbar on Scroll */}
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

          {/* Hero Section */}
          <div className="z-[-1000]">
            <section className="relative h-screen">
              <div
                className="hero bg-cover top-0 z-[-2] bg-center absolute h-full w-full"
                style={{ backgroundImage: `url(${img_one})` }}
              ></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-opacity-50"></div>

              {/* Static Navbar */}
              <div className="absolute top-0 left-0 right-0 z-[100] text-white">
                <Navbar />
              </div>

              {/* Hero Content */}
              <motion.div
                className="relative z-20 pt-[20vh] text-white"
                initial="hidden"
                animate="visible"
                variants={heroContentVariants}
              >
                <div className="max-w-4xl mx-auto text-center py-16">
                  <motion.h1
                    className="text-3xl md:text-5xl font-thin tracking-[.5rem] uppercase mb-4 text-white transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Companion Care Starts Here
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Discover premium pet supplies and expert care to keep your
                    furry friends happy and healthy.
                  </motion.p>

                  <ShopNowViewAllButton name="Shop Now" />
                </div>
              </motion.div>
            </section>
          </div>
          <Collections />
          <section className="footer relative top-[5rem] lg:top-0">
            <Footer />
          </section>
        </>
      )}
    </ScrollHandler>
  );
};

export default CollectionsPage;
