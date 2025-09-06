import { Back } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import ProfileImageChange from "./_components/ProfileImageChange";
import Form from "./_components/Form";

const AccountSetting = () => {
  const t = useTranslations();
  return (
    <section className="px-6 py-7">
      <div className="container">
        <Back text={t("account setting")} href="/account-setting" />
        <div className="grid md:grid-cols-3 mt-6 md:mt-10 gap-6">
          <ProfileImageChange />
          <div className="md:col-span-2 bg-white rounded-xl box-shadow p-6 h-fit">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSetting;
