import React from "react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartSlide = () => {
  const { closeCart } = useCart();
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

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[.9rem] tracking-[.2rem]">CART</h2>
        <button className="p-2 bg-gray-100 rounded-full">
          <X size={20} onClick={() => closeCart()} />
        </button>
      </div>

      <div className="text-sm text-green-500 border-b pb-4">
        You are eligible for free shipping.
      </div>

      <div className="flex-1 overflow-auto text-[.8rem] tracking-[.1rem]">
        {cartItems.map((item, index) => (
          <div
            key={index}
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
                <button className="text-gray-400">
                  <X size={16} />
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center border">
                  <button className="px-2 py-1">
                    <Minus size={16} />
                  </button>
                  <span className="px-3 border-x">{item.quantity}</span>
                  <button className="px-2 py-1">
                    <Plus size={16} />
                  </button>
                </div>
                <span className="font-medium">₦{item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-4 text-[.8rem]">
        <div className="flex items-center border-b pb-4">
          <span className="flex-1">NOTE</span>
          <button className="text-gray-600">
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

        <button className="w-full bg-black text-white py-3 mb-2 tracking-[.2rem]">
          CHECK OUT
        </button>

        <button className="w-full text-center py-2 tracking-[.1rem]">
          View cart
        </button>
      </div>
    </div>
  );
};

export default CartSlide;
