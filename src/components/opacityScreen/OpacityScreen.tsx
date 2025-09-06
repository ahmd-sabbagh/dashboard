"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface Props {
  children?: React.ReactNode;
  state: boolean;
  setState?: (vlaue: false) => void;
  className?: string;
}

const OpacityScreen: React.FC<Props> = ({
  state,
  setState,
  children,
  className,
}) => {
  const clickHandel = () => {
    if (setState) {
      setState(false);
    }
  };
  return (
    <AnimatePresence mode="wait">
      {state && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={cn(
            "h-screen w-full fixed bg-black/30 top-0 start-0 z-[240]",
            className ? className : "lg:hidden"
          )}
          onClick={clickHandel}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpacityScreen;
