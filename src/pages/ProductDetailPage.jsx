import React from "react";
import ScrollHandler from "../utils/ScrollHandler";
import NavbarWrapper from "../components/NavbarWrapper";
import MessageBar from "../components/MessageBar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Navbar from "../components/Navbar";

const ProductDetailPage = () => {
  return (
    <ScrollHandler>
      {({ scrolled, isScrollingUp, navbarVariants }) => (
        <>
          <MessageBar />
          <NavbarWrapper
            scrolled={scrolled}
            isScrollingUp={isScrollingUp}
            navbarVariants={navbarVariants}
          />
          <Navbar />
          <div className="z-[-1000]">
            <section className="relative">
              <div className="hero bg-cover top-0 z-[-2] bg-center absolute h-full w-full"></div>
            </section>
            <ProductDetail />
            <Footer top={`top-[15vh]`} />
          </div>
        </>
      )}
    </ScrollHandler>
  );
};

export default ProductDetailPage;
