import { search_ } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import SortBy from "./_components/SortBy";
import Filter from "./_components/Filter";

interface Props {
  title: string;
  href:string;

}

const PageHeaderFilter: React.FC<Props> = ({title,href}) => {
  const t = useTranslations();
  return (
    <section>
      <div className="container">
        <div className="flex justify-between">
          <p className="title-color text-lg md:text-xl font-bold">
            {title}
          </p>
          <Link
            href={href}
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
        <div className="mt-6 md:mt-[30px] flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="bg-white px-4 h-[52px] flex items-center gap-2 rounded-lg border border-[#919EAB33] w-full md:w-auto grow">
            <div className="w-6 h-6 relative">
              <Image
                src={search_}
                alt="search icon"
                fill
                loading="lazy"
                sizes="24px"
              />
            </div>
            <input
              type="text"
              placeholder={t("Find the user")}
              className="grow"
            />
          </div>
          <div className="flex items-center justify-between gap-10 w-full md:w-auto">
            <SortBy />
            <Filter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderFilter;
