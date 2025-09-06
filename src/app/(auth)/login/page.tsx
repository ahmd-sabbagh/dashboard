import React from "react";
import BgAuth from "../_components/BgAuth";
import BgWhite from "../_components/BgWhite";
import Image from "next/image";
import { logo_reg } from "@/assets";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const t = useTranslations()
  return (
    <BgAuth>
      <BgWhite>
        {/* Logo */}
        <div className="relative w-[182px] h-[156px] mx-auto">
          <Image
            src={logo_reg}
            alt="logo"
            fill
            priority
            sizes="(max-width: 768px) 120px, 182px"
            className="object-contain"
          />
        </div>
        {/* Title */}
        <h3 className="font-bold text-[32px] text-center title-color mt-6">
          {t("login")}
        </h3>
        <p className="text-center desc-color text-sm mt-4">{t("login_desc")}</p>
        <LoginForm />
      </BgWhite>
    </BgAuth>
  );
};

export default LoginPage;
