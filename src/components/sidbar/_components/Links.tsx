"use client";
import { useAppDispatch } from "@/toolkit/hooks";
import { setFalse } from "@/toolkit/slices/openMenu";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  data: {
    href: string;
    name: string;
    icon: StaticImageData;
  }[];
  className?: string;
}

const Links: React.FC<Props> = ({ title, data, className }) => {
  const pathname = usePathname();
    const dispatch = useAppDispatch();
  
  return (
    <div className={cn(className)}>
      <h4 className="text-white/50 text-sm font-bold">{title}</h4>
      <div className="flex flex-col gap-1 mt-3">
        {data.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              "flex items-center gap-2 py-[10px] px-2 rounded-[20px] hover:bg-white/10 transition-all",
              pathname === item.href ? "bg-white/10" :""
            )}
            onClick={() => dispatch(setFalse())}
          >
            <div className="relative w-6 h-6">
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                fill
                loading="lazy"
                sizes="24px"
              />
            </div>
            <h4 className="text-white text-sm">{item.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
