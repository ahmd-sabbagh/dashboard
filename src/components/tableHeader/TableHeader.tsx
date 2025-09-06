"use client";
import { CheckBox } from "@/components";
import { cn } from "@/utils/cn";
import React from "react";
interface HeaderProps {
  allSelected: boolean;
  isIndeterminate: boolean;
  onSelectAll: (checked: boolean) => void;
  headData: string[];
  className?:string
}

const TableHeader: React.FC<HeaderProps> = ({
  allSelected,
  isIndeterminate,
  onSelectAll,
  headData,
  className
}) => {
  return (
    <div className={cn("md:grid items-center px-2 bg-[#F4F6F8] h-14 hidden",className)}>
      <CheckBox
        checked={allSelected}
        indeterminate={isIndeterminate}
        onChange={onSelectAll}
        id="selectAll"
      />
      {headData.map((item, idx) => (
        <div
          key={idx}
          className={cn("desc-color text-center font-bold text-sm line-clamp-1")}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
