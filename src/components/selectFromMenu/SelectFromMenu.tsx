"use client";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  title: string;
  data: string[];
  state: string;
  setState: (value: string) => void;
  className?: string;
  placeholder?: string;
  condition?: string;
}

const SelectFromMenu: React.FC<Props> = ({
  title,
  data,
  state,
  setState,
  className,
  placeholder,
  condition,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  }, [buttonRef]);
  return (
    <div className={className}>
      {condition && <h4 className="text-sm font-bold mb-3 block title-color">{title}</h4>}
      <div className="relative bg-white mt-1 rounded-lg border border-color desc-color h-[52px] flex items-center">
        {!condition && (
          <h4 className="absolute text-xs bg-white px-1 top-[-8px] start-4">
            {title}
          </h4>
        )}

        <button
          type="button"
          className="flex items-center justify-between w-full px-3"
          onClick={() => setOpen(!open)}
          ref={buttonRef}
        >
          <span className="text-xs">
            {state ? state : placeholder ? placeholder : title}
          </span>
          <span
            className={cn(
              "transition duration-500",
              open ? "rotate-180" : "rotate-0"
            )}
          >
            <IoIosArrowDown />
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, 20, 0, 10, 0],
              }}
              exit={{ opacity: 0, y: 30 }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              ref={menuRef}
              className="absolute w-full top-[calc(100%+6px)] start-0 box-shadow bg-white rounded-xl overflow-hidden z-50"
            >
              {data.map((item, idx) => (
                <button
                  type="button"
                  key={idx}
                  className="px-4 py-2 block w-full text-start bg-white transition hover:bg-gray-100"
                  onClick={() => {
                    setState(item);
                    setOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectFromMenu;
