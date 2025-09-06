import { search_ } from "@/assets";
import { SelectFromMenu } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

const Searching = () => {
  const t = useTranslations();
  const [newMember, setNewMember] = useState<string>("");
  const new_member = {
    title: t("Notification type"),
    data: ["عضو جديد", "عضو جديد", "عضو جديد"],
    state: newMember,
    setState: setNewMember,
  };
  return (
    <div className="mt-3 pt-3 border-t border-color grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:items-end gap-4">
      <SelectFromMenu {...new_member} />
      <div className="bg-white px-4 h-[52px] flex items-center gap-2 rounded-lg border border-[#919EAB33] lg:col-span-2 xl:col-span-4">
        <div className="w-6 h-6 relative">
          <Image
            src={search_}
            alt="search icon"
            fill
            loading="lazy"
            sizes="24px"
          />
        </div>
        <input type="text" placeholder={t("Search for notifications")} className="grow" />
      </div>
    </div>
  );
};

export default Searching;
