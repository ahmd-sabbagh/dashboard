"use client"
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";
interface Props {
  value: string;
  title: string;
  state: string | undefined;
  setState: (value: string) => void;
}

const RadioBtn:React.FC<Props> = ({ value, title, state, setState }) => {
  return (
    <button
      type="button"
      className={cn("flex items-center gap-2")}
      onClick={() => setState(value)}
    >
      <div
        className={cn(
          "flex-c w-5 h-5 rounded-full border",
          state === value ? "border-main-color" : "border-color"
        )}
      >
        {state === value && (
          <motion.div className="w-3 h-3 rounded-full bg-main" />
        )}
      </div>
      <p className="text-sm md:text-base desc-color">{title}</p>
    </button>
  );
};

export default RadioBtn;
