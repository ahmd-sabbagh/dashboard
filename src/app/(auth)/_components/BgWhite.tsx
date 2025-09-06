"use client";
import { CHILDREN } from "@/utils/dtos";
import { motion } from "framer-motion";
import React from "react";
const BgWhite = ({ children }: CHILDREN) => {
  return (
    <motion.div
      className="max-w-[520px] rounded-[20px] bg-white p-4 sm:p-5 md:px-[47px] md:pt-[21px] md:pb-10 mx-auto"
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default BgWhite;
