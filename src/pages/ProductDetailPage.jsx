import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import img_one from "../assets/img/three.jpeg";
import img_two from "../assets/img/img_two.jpg";
import img_four from "../assets/img/four.jpeg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ShopNowViewAllButton from "../components/ShopNowViewAllButton";
import MobileFooter from "../components/MobileFooter";
import DesktopFooter from "../components/DesktopFooter";
import ScrollHandler from "../utils/ScrollHandler"; // Import the ScrollHandler component
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = () => {
  return (
    <ScrollHandler>
      {({ scrolled, isScrollingUp, navbarVariants, heroContentVariants }) => (
        <>
          <motion.div
            className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem]"
            initial="hidden"
            animate="visible"
          >
            <HiChevronLeft size={20} color="white" />
            december sale is currently on...
            <HiChevronRight size={20} color="white" />
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

          <div className="z-[-1000]">
            <section className="relative">
              <div className="hero bg-cover top-0 z-[-2] bg-center absolute h-full w-full"></div>
              {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-opacity-50"></div> */}

              <div className="absolute top-0 left-0 right-0 z-[100] text-black">
                <Navbar />
              </div>

              <motion.div
                className="relative z-20 pt-[20vh] text-white"
                initial="hidden"
                animate="visible"
                variants={heroContentVariants}
              ></motion.div>
            </section>
            <ProductDetail />
            <section className="footer relative top-[5rem] lg:top-0">
              <div className="lg:hidden">
                <MobileFooter />
              </div>
              <div className="hidden lg:block">
                <DesktopFooter />
              </div>
            </section>
          </div>
        </>
      )}
    </ScrollHandler>
  );
};

export default ProductDetailPage;
