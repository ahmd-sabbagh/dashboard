import { AnimatedCounter } from "@/components";
import React from "react";

import Image, { StaticImageData } from "next/image";
import { stack } from "@/assets";
interface Props {
  title: string;
  number: number;
  state: string;
  icon:StaticImageData
}

const NumberCard: React.FC<Props> = ({ title, number, state ,icon}) => {
  return (
    <div className="p-6 bg-white rounded-2xl box-shadow">
      <h4 className="title-color text-sm font-bold">{title}</h4>
      <div className="flex items-center justify-between mt-4">
        <AnimatedCounter target={number} duration={1} />
        <div className="w-24 h-12 relative">
          <Image src={icon} alt="line-icon" fill loading="lazy" sizes="96px" />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="w-6 h-6 relative">
          <Image
            src={stack}
            alt="stack-icon"
            fill
            loading="lazy"
            sizes="24px"
          />
        </div>
        <span className="text-sm font-bold title-color">{state}</span>
      </div>
    </div>
  );
};

export default NumberCard;
