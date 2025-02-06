import { useState, useEffect } from "react";

const ScrollHandler = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll behavior
      if (currentScrollTop <= 40) {
        setScrolled(false);
        setIsScrollingUp(false);
        return;
      }

      if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        setIsScrollingUp(true);
        if (currentScrollTop > 130) {
          setScrolled(true);
        }
      } else {
        // Scrolling down
        setIsScrollingUp(false);
        setScrolled(false);
      }

      // Update last scroll position
      setLastScrollTop(currentScrollTop);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Navbar Variants
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: "easeOut",
      },
    },
  };

  // Hero Content Variants
  const heroContentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return children({
    scrolled,
    isScrollingUp,
    navbarVariants,
    heroContentVariants,
  });
};

export default ScrollHandler;