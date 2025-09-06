"use client";
import { Input, SelectFromMenu, SubmitBtn } from "@/components";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Form = () => {
  const t = useTranslations();
  const [validity, setValidity] = useState<string>("");
  const validityData = {
    title: t("Validity"),
    data: ["مسؤول", "مسؤول", "مسؤول"],
    state: validity,
    setState: setValidity,
    placeholder: t("Validity placeholder"),
    condition:"top"
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mt-6 md:mt-10">
      <div className="py-4 px-6 bg-white rounded-2xl flex flex-col gap-6 box-shadow">
        <Input
          lable={t("user name")}
          condition="top"
          placeholder={t("user name")}
        />
        <Input
          type="email"
          lable={t("email")}
          condition="top"
          placeholder={t("email")}
        />
        <SelectFromMenu {...validityData} />
      </div>
       <SubmitBtn text={t("Save and add")} />
    </form>
  );
};

export default Form;
