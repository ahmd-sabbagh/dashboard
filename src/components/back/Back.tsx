import { arrow } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  text: string;
  href:string
}

const Back: React.FC<Props> = ({ text,href }) => {
  return (
    <div className="flex items-center gap-[14px]">
      <Link
        href={href}
        className="w-10 h-10 rounded-full flex-c bg-white/50 ltr:rotate-180 shadow-lg"
      >
        <div className="h-[10px] w-1.5 relative">
          <Image src={arrow} alt="arrow icon" fill loading="lazy" sizes="6px" />
        </div>
      </Link>
      <h3 className="font-bold text-lg md:text-xl title-color">{text}</h3>
    </div>
  );
};

export default Back;
