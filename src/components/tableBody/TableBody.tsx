"use client";
import { CheckBox } from "@/components";
import { USERTABLEDATA } from "@/utils/dtos";
import React from "react";
import ProfileImg from "./ProfileImg";
import Link from "next/link";
import Image from "next/image";
import { gender, location, pen, time } from "@/assets";
import Menu from "./Menu";
import { cn } from "@/utils/cn";
interface Props {
  data: USERTABLEDATA[];
  selectedIds: string[];
  onToggleRow: (id: string, checked: boolean) => void;
  className?: string;
}

const TableBody: React.FC<Props> = ({
  data,
  selectedIds,
  onToggleRow,
  className,
}) => {
  return (
    <>
      {/* ----------------mobile---------------- */}
      <div className="md:hidden flex flex-col gap-6">
        {data.map((item) => (
          <div key={item.id} className="pt-4 px-6 rounded-xl box-shadow">
            {/* Image */}
            <div className="flex items-center justify-between">
              <ProfileImg image={item.image} />
              <div className="flex items-center gap-6">
                <CheckBox
                  checked={selectedIds.includes(item.id)}
                  onChange={(checked) => onToggleRow(item.id, checked)}
                  id={`single_${item.id}_mob`}
                />
                <Menu />
              </div>
            </div>
            {/* Status */}
            {item.status_ === "under_review" ? (
              <p
                className="px-1.5 py-0.5 bg-[#FFDF3C29] text-[#FFB13C] w-fit  rounded-[6px] mt-4 text-xs"
                title={item.status}
              >
                {item.status}
              </p>
            ) : item.status_ === "active" ? (
              <p className="px-1.5 py-0.5 bg-[#50EE7029] text-[#50EE70] w-fit rounded-[6px] mt-4 text-xs">
                {item.status}
              </p>
            ) : (
              <p className="px-1.5 py-0.5 bg-[#FE5D5D29] text-[#FE5D5D] w-fit rounded-[6px] mt-4 text-xs">
                {item.status}
              </p>
            )}
            {/* Name */}
            <h4
              className="line-clamp-1 mt-4 text-sm title-color"
              title={item.name}
            >
              {item.name}
            </h4>
            {item.email && <p className="desc-color text-sm mt-2">{item.email}</p>}
            {/* Gender and Country */}
            {item.gender && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-[18px] h-[18px] relative">
                    <Image
                      src={gender}
                      alt="gender icon"
                      fill
                      loading="lazy"
                      sizes="18px"
                    />
                  </div>
                  <span className="text-sm title-color">{item.gender}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[18px] h-[18px] relative">
                    <Image
                      src={location}
                      alt="location icon"
                      fill
                      loading="lazy"
                      sizes="18px"
                    />
                  </div>
                  <span className="text-sm title-color">{item.country}</span>
                </div>
              </div>
            )}

            {/* Date and Subscribe */}
            <div className="pt-8 pb-4 border-t border-dashed border-color mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 relative">
                  <Image
                    src={time}
                    alt="clock icon"
                    fill
                    loading="lazy"
                    sizes="16px"
                  />
                </div>
                <span className="text-sm title-color">{item.join_date}</span>
              </div>
              {/* subscribe */}
              {item.subscribe && (
                <span className="text-sm title-color">{item.subscribe}</span>
              )}
              {/* role_and_authority */}
              {item.role_and_authority && (
                <span className="text-sm title-color">
                  {item.role_and_authority}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* ----------------web---------------- */}
      <div className="hidden md:block">
        {data.map((item) => (
          <div
            className={cn(
              "grid items-center px-4 h-[86px] bg-white border-b border-dashed border-color text-center text-sm title-color",
              className
            )}
            key={item.id}
          >
            {/* Image */}
            <div className="flex items-center gap-6">
              <CheckBox
                checked={selectedIds.includes(item.id)}
                onChange={(checked) => onToggleRow(item.id, checked)}
                id={`single_${item.id}`}
              />
              <ProfileImg image={item.image} />
            </div>
            {/* Name */}
            <h4 className="line-clamp-1" title={item.name}>
              {item.name}
            </h4>
            {/* Gender */}
            {item.gender && (
              <p className="line-clamp-1" title={item.gender}>
                {item.gender}
              </p>
            )}
            {/* Email */}
            {item.email && (
              <p className="line-clamp-1" title={item.email}>
                {item.email}
              </p>
            )}
            {/* Country */}
            {item.country && (
              <p className="line-clamp-1" title={item.country}>
                {item.country}
              </p>
            )}
            {/* role_and_authority */}
            {item.role_and_authority && (
              <p className="line-clamp-1" title={item.role_and_authority}>
                {item.role_and_authority}
              </p>
            )}
            {/* Subscribe */}
            {item.subscribe && (
              <p className="line-clamp-1" title={item.subscribe}>
                {item.subscribe}
              </p>
            )}

            {item.status_ === "under_review" ? (
              <p
                className="px-1.5 py-0.5 bg-[#FFDF3C29] text-[#FFB13C] w-fit mx-auto rounded-[6px] line-clamp-1"
                title={item.status}
              >
                {item.status}
              </p>
            ) : item.status_ === "active" ? (
              <p className="px-1.5 py-0.5 bg-[#50EE7029] text-[#50EE70] w-fit mx-auto rounded-[6px]">
                {item.status}
              </p>
            ) : (
              <p className="px-1.5 py-0.5 bg-[#FE5D5D29] text-[#FE5D5D] w-fit mx-auto rounded-[6px]">
                {item.status}
              </p>
            )}
            <p>{item.join_date}</p>
            <div className="flex items-center justify-end gap-6 col-span-1/2">
              <Link href={""} className="relative w-5 h-5 hidden md:block">
                <Image
                  src={pen}
                  alt="pen icon"
                  fill
                  loading="lazy"
                  sizes="20px"
                />
              </Link>
              <Menu />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableBody;
