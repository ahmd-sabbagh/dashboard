"use client";
import React from "react";
import Logo from "./_components/Logo";
import { useTranslations } from "next-intl";
import { bag, chats, home, safty, setting_, tv, users } from "@/assets";
import Links from "./_components/Links";
import { cn } from "@/utils/cn";
import { useAppSelector } from "@/toolkit/hooks";

const Sidebar: React.FC = () => {
  const t = useTranslations();
  const public_display = {
    title: t("Public display"),
    data: [
      {
        name: t("home"),
        href: "/",
        icon: home,
      },
      {
        name: t("Users"),
        href: "/users",
        icon: users,
      },
      {
        name: t("ads"),
        href: "/ads",
        icon: tv,
      },
    ],
  };
  const monitoring_and_support = {
    title: t("Monitoring and support"),
    data: [
      {
        name: t("Chats"),
        href: "",
        icon: chats,
      },
      {
        name: t("Roles and powers"),
        href: "/roles-and-powers",
        icon: bag,
      },
      {
        name: t("System settings"),
        href: "",
        icon: setting_,
      },
      {
        name: t("technical support"),
        href: "",
        icon: safty,
      },
    ],
  };
  const status = useAppSelector((state) => state.menu.value);
  return (
    <div
      className={cn(
        "w-full lg:min-w-[280px] lg:max-w-[280px] bg-[#2C1060] min-h-screen fixed top-16 lg:top-0 lg:sticky px-4 pt-5 transition-all duration-500 z-[100]",
        status ? "start-0":"start-[-100%] lg:start-0"
      )}
    >
      <Logo />
      <Links {...public_display} className="mt-12" />
      <Links {...monitoring_and_support} className="mt-5" />
    </div>
  );
};

export default Sidebar;
