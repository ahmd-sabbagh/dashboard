"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

interface Props {
  type?: string;
  lable?: string;
  placeholder?: string;
  id?: string;
  showToggle?: boolean;
  onToggle?: () => void;
  showPass?: boolean;
  className?: string;
  condition?: string;
}

const Input = ({
  type = "text",
  lable,
  placeholder,
  id,
  showToggle = false,
  onToggle,
  showPass,
  className,
  condition,
}: Props) => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <div>
      {condition && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-bold mb-3 block",
            status ? "text-main" : "title-color"
          )}
        >
          {lable}
        </label>
      )}
      <div
        className={cn(
          "relative h-[52px] rounded-lg border px-4 py-3 w-full",
          className,
          status ? "border-main-color" : "border-color"
        )}
      >
        {!condition && (
          <label
            htmlFor={id}
            className={cn(
              "absolute text-xs bg-white px-1 top-[-8px] start-4",
              status ? "text-main" : "desc-color"
            )}
          >
            {lable}
          </label>
        )}

        <div className="flex items-center">
          <input
            type={showToggle ? (showPass ? "text" : "password") : type}
            placeholder={placeholder}
            id={id}
            className={cn("w-full")}
            onFocus={() => setStatus(true)}
            onBlur={() => setStatus(false)}
          />
          {showToggle && (
            <button
              type="button"
              className="text-xl desc-color min-w-fit"
              onClick={onToggle}
            >
              {showPass ? <FaRegEye /> : <FaEyeSlash />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
