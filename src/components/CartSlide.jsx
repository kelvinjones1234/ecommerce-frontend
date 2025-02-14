import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartSlideExtension from "./CartSlideExtension";

const CartSlide = () => {
  const { closeCart, isCartOpen } = useCart();
  const [showExtendedSlide, setShowExtendedSlide] = useState(false);

  const cartItems = [
    {
      name: "Dog Blanket Nap",
      color: "Brown",
      price: 85.0,
      quantity: 4,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Dog Mini Travel Set",
      price: 66.0,
      quantity: 2,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Happy Howlidays Cat and Dog",
      price: 8.5,
      quantity: 1,
      image: "/api/placeholder/80/80",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Reset extended slide state when cart closes
  useEffect(() => {
    if (!isCartOpen) {
      setTimeout(() => setShowExtendedSlide(false), 300);
    } else {
      setTimeout(() => setShowExtendedSlide(true), 400);
    }
  }, [isCartOpen]);

  const slideVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  const extendedSlideVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  const cartItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isCartOpen && (
        <div className="fixed inset-0 flex justify-end">
          {/* Backdrop */}
          <div className="fixed inset-0" onClick={closeCart} />

          {/* Main Cart Slide */}
          <motion.div
            exit={{
              x: "100%",
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.8,
                delay: 0.1,
              },
            }}
          >
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              className="fixed right-0 top-0 h-full w-80 [@media(min-width:700px)]:w-[150%] bg-white shadow-lg p-4 flex flex-col z-50 "
            >
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-between items-center mb-4"
              >
                <h2 className="text-[.9rem] tracking-[.2rem]">CART</h2>
                <button
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={closeCart}
                >
                  <X size={20} />
                </button>
              </motion.div>

              <motion.div
                variants={contentVariants}
                className="text-sm text-green-500 border-b pb-4"
              >
                You are eligible for free shipping.
              </motion.div>

              <div className="flex-1 overflow-auto custom-scrollbar text-[.8rem] tracking-[.1rem]">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cartItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="py-6 border-b-[.2rem] border-gray-400 flex"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.color && (
                            <p className="text-sm text-gray-500">
                              Colour: {item.color}
                            </p>
                          )}
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border">
                          <button className="px-2 py-1 hover:bg-gray-100 transition-colors">
                            <Minus size={16} />
                          </button>
                          <span className="px-3 border-x">{item.quantity}</span>
                          <button className="px-2 py-1 hover:bg-gray-100 transition-colors">
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-medium">
                          ₦{item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={contentVariants}
                className="mt-4 border-t pt-4 text-[.8rem]"
              >
                <div className="flex items-center border-b pb-4">
                  <span className="flex-1">NOTE</span>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M15.7 3.3l-3-3c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3L4 7.6l-3 3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l3-3 7.3-7.3c.4-.4.4-1 0-1.4zM7.6 10.1L5.9 8.4l6.4-6.4 1.7 1.7-6.4 6.4z" />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-between items-center py-4">
                  <span>Subtotal</span>
                  <span className="font-medium">₦{subtotal.toFixed(2)}</span>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Tax included. Shipping calculated at checkout.
                </p>

                <button className="w-full bg-black text-white py-3 mb-2 tracking-[.2rem] hover:bg-gray-800 transition-colors">
                  CHECK OUT
                </button>

                <button className="w-full text-center py-2 tracking-[.1rem] hover:bg-gray-100 transition-colors">
                  View cart
                </button>
              </motion.div>
            </motion.div>

            {/* Extended Slide */}
            {showExtendedSlide && (
              <motion.div
                variants={extendedSlideVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  x: "100%",
                  transition: {
                    // type: "spring",
                    // damping: 30,
                    // stiffness: 200,
                    // // mass: 0.8,
                    // delay: 0,
                  },
                  opacity: 0,
                }}
                className="fixed right-80 lg:right-[150%] top-0 h-full w-80 bg-gray-100 py-4 pl-4 pr-1 z-40 border-r-[1px] border-black hidden [@media(min-width:850px)]:block"
              >
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="mt-2 text-sm">
                    <CartSlideExtension />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartSlide;
