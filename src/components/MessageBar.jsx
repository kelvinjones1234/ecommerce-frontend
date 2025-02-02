import React from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MessageBar = () => {
  return (
    <motion.div
      className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem] px-[1.5rem] lg:px-[5rem]"
      initial="hidden"
      animate="visible"
    >
      <HiChevronLeft size={20} color="white" />
      December sale is currently on...
      <HiChevronRight size={20} color="white" />
    </motion.div>
  );
};

export default MessageBar;
