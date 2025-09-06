"use client";
import { CheckBox } from "@/components";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {notification, pen, time } from "@/assets";

import { cn } from "@/utils/cn";
import Menu from "./Menu";

interface TABLEDATA {
  id: string;
  notification_title: string;
  notification_type: string;
  status: string;
  status_: string;
  publication_date: string;
}

interface Props {
  data: TABLEDATA[];
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
            {/* Icon */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full flex-c bg-[#711CB61A]">
                <div className="relative w-5 h-5">
                  <Image
                    src={notification}
                    alt="profile img"
                    fill
                    loading="lazy"
                    sizes="20px"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <CheckBox
                  checked={selectedIds.includes(item.id)}
                  onChange={(checked) => onToggleRow(item.id, checked)}
                  id={`single_${item.id}_mob`}
                />
                <Menu />
              </div>
            </div>
            {/* notification title */}
            <p
              className="line-clamp-1 mt-4 text-sm title-color"
              title={item.notification_title}
            >
              {item.notification_title}
            </p>
            {/* notification type */}
            <p
              className="line-clamp-1 mt-2 text-sm desc-color"
              title={item.notification_type}
            >
              {item.notification_type}
            </p>

            {/* Date and Subscribe */}
            <div className="pt-8 pb-4 border-t border-dashed border-color mt-4 flex items-center justify-between">
              {/* Date */}
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
                <span className="text-sm title-color">
                  {item.publication_date}
                </span>
              </div>
              {/* Status */}
              {item.status_ === "under_review" ? (
                <p
                  className="px-1.5 py-0.5 bg-[#FFDF3C29] text-[#FFB13C] w-fit  rounded-[6px] text-xs"
                  title={item.status}
                >
                  {item.status}
                </p>
              ) : item.status_ === "active" ? (
                <p className="px-1.5 py-0.5 bg-[#50EE7029] text-[#50EE70] w-fit rounded-[6px] text-xs">
                  {item.status}
                </p>
              ) : (
                <p className="px-1.5 py-0.5 bg-[#FE5D5D29] text-[#FE5D5D] w-fit rounded-[6px] text-xs">
                  {item.status}
                </p>
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
            {/* Icon */}
            <div className="flex items-center gap-6">
              <CheckBox
                checked={selectedIds.includes(item.id)}
                onChange={(checked) => onToggleRow(item.id, checked)}
                id={`single_${item.id}`}
              />
              <div className="w-10 h-10 rounded-full flex-c bg-[#711CB61A]">
                <div className="relative w-5 h-5">
                  <Image
                    src={notification}
                    alt="profile img"
                    fill
                    loading="lazy"
                    sizes="20px"
                  />
                </div>
              </div>
            </div>
            {/* Notification Title */}
            <h4 className="line-clamp-1" title={item.notification_title}>
              {item.notification_title}
            </h4>
            {/* Notification Type */}
            <p className="line-clamp-1" title={item.notification_type}>
              {item.notification_type}
            </p>
            {/* Status 👍 */}
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
            {/* Publication Date */}
            <p>{item.publication_date}</p>
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
