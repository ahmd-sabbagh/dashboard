import { filter } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Filter = () => {
  const t = useTranslations();
  return (
    <button
      type="button"
      className="title-color font-bold text-sm flex items-center gap-2 p-2"
    >
      <span>{t("Filter")}</span>
      <div className="relative w-5 h-5">
        <Image
          src={filter}
          alt="filter icon"
          fill
          loading="lazy"
          sizes="20px"
        />
      </div>
    </button>
  );
};

export default Filter;
