import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { toggleCart } = useCart();
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const cartButtonVariants = {
    initial: { y: "100%", opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      // className="flex-shrink-0 w-[280px] mx-[.4rem] px-3 group cursor-pointer"
      className="flex-shrink-0 w-[280px] px-3 group cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <div className="aspect-square bg-gray-50 overflow-hidden mb-4 relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
        <motion.button
          className="absolute top-2 right-2 rounded-full bg-white p-2"
          variants={buttonVariants}
        >
          <Search className="h-4 w-4" />
        </motion.button>
        <motion.button
          className="hidden lg:block absolute bottom-4 left-0 right-0 bg-black py-3 text-white text-[.8rem]"
          variants={cartButtonVariants}
        >
          ADD TO CART
        </motion.button>
        {/* <motion.button
          className="lg:hidden absolute bottom-4 right-4 rounded-full bg-black p-2"
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </motion.button> */}
        <AddToCartButton
          isFloating
          onClick={() => {
            toggleCart();
          }}
        />
      </div>
      <div className="space-y-2 text-center">
        <p className="text-xs text-gray-600 uppercase tracking-wider">
          {product.brand}
        </p>
        <h3 className="text-sm font-normal line-clamp-2 text-gray-900">
          {product.name}
        </h3>
        <p className="text-sm text-gray-900">
          {product.price.max
            ? `₦${product.price.min.toFixed(2)} – $${product.price.max.toFixed(
                2
              )}`
            : `₦${product.price.min.toFixed(2)}`}
        </p>
      </div>
    </motion.div>
  );
};

const Carousel = ({ products, title }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScroll();
    carouselRef.current?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      carouselRef.current?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [products]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-medium mb-8 text-center">{title}</h2>

      <div className="relative">
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide custom-scrollbar scroll-smooth"
        >
          <div className="flex 2xl:justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute top-1/2 -left-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg transition-opacity ${
            !canScrollLeft
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute top-1/2 -right-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg transition-opacity ${
            !canScrollRight
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const ProductRecommendations = ({ heading }) => {
  const recommendedProducts = [
    {
      id: 1,
      brand: "HARLOW HARRY",
      name: "D'Bacca 169 - Dog Shampoo Set",
      price: { min: 89.0, max: 106.0 },
      image: "/api/placeholder/400/400",
    },
    {
      id: 2,
      brand: "SMITH&BURTON",
      name: "Hydrating Dog Shampoo",
      price: { min: 28.0, max: 39.0 },
      image: "/api/placeholder/400/400",
    },
    {
      id: 3,
      brand: "ASHLEY & CO",
      name: "Dog Box - Topup Set",
      price: { min: 92.0, max: null },
      image: "/api/placeholder/400/400",
    },
    {
      id: 4,
      brand: "SMITH&BURTON",
      name: "Soothing Lustre Dog Grooming Set 500ml",
      price: { min: 98.0, max: null },
      image: "/api/placeholder/400/400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Carousel products={recommendedProducts} title="You May Also Like" />
      </div>
      <div className="mt-[5rem]">
        <Carousel products={recommendedProducts} title="Recently Viewed" />
      </div>
    </div>
  );
};

export default ProductRecommendations;
