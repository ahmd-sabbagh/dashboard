import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Head = () => {
  const t = useTranslations();
  return (
    <div className="flex justify-between">
      <p className="title-color text-lg md:text-xl font-bold">{t("notifications")}</p>
      <Link
        href={"/add-notification"}
        className="flex items-center gap-2 bg-main rounded-lg px-2 md:px-4 py-2"
      >
        <span className="font-bold text-white hidden md:block text-sm">
          {t("add new")}
        </span>
        <span className="text-sm text-white">
          <FaPlus />
        </span>
      </Link>
    </div>
  );
};

export default Head;
