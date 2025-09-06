"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Input } from "@/components";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const t = useTranslations();
  const router = useRouter()
  const [showPass, setShowPass] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/")
  };
  return (
    <form onSubmit={onSubmit} className="mt-6">
      <Input
        id="email"
        type="email"
        lable={t("email")}
        placeholder={t("email_placeholder")}
      />
      <Input
        className="mt-5"
        id="password"
        lable={t("password")}
        placeholder={t("password_placeholder")}
        showToggle
        showPass={showPass}
        onToggle={() => setShowPass(!showPass)}
      />
      <div className="mt-4 flex items-center justify-between">
        <Link href={""} className="desc-color text-sm">
          {t("forget_password")}
        </Link>
        <div className="flex items-center gap-2">
          <span className="desc-color text-sm">{t("remember_me")}</span>
          <button
            className={cn(
              "h-[14px] w-8 rounded-lg relative",
              remember ? "bg-main" : "bg-[#DBDDE0]"
            )}
            onClick={() => setRemember(!remember)}
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full bg-white absolute top-[-1px] shadow-md",
                !remember ? "start-0" : "end-0"
              )}
            />
          </button>
        </div>
      </div>
      <button type="submit" className="flex-c w-full h-14 rounded-xl mt-8 bg-main text-white font-bold">{t("log in")}</button>
      <div className="flex items-center gap-1 justify-center text-sm mt-6">
        <span>{t("Need help")}</span>
        <Link href={""} className="text-main">{t("contact us")}</Link>
      </div>
    </form>
  );
};

export default LoginForm;
