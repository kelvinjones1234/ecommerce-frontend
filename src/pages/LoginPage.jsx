import React from "react";
import ScrollHandler from "../utils/ScrollHandler";
import MessageBar from "../components/MessageBar";
import Navbar from "../components/Navbar";
import NavbarWrapper from "../components/NavbarWrapper";
import Footer from "../components/Footer";
import Login from "../components/Login";

const LoginPage = () => {
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
            <Login />
            <Footer top={`top-[5vh]`} />
          </div>
        </>
      )}
    </ScrollHandler>
  );
};

export default LoginPage;
