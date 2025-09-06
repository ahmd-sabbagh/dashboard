"use client";
import { Input, SelectFromMenu, SubmitBtn } from "@/components";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Form = () => {
  const t = useTranslations();
  const [country, setCountry] = useState<string>("");
  const [validityState, setValidity] = useState<string>("");

  const countryData = {
    title: t("country"),
    data: [t("Egypt"), t("Algeria"), t("Saudi Arabia"), t("Afghanistan")],
    state: country,
    setState: setCountry,
  };
  const validity = {
    title: t("Validity"),
    data: ["مسؤول", "مسؤول", "مسؤول"],
    state: validityState,
    setState: setValidity,
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
        <Input
          id="name"
          type="text"
          lable={t("name")}
          placeholder={t("name")}
          className="md:col-span-2"
        />
        <Input
          id="email"
          type="email"
          lable={t("email")}
          placeholder={t("email")}
        />
        <Input
          id="phone"
          type="number"
          lable={t("phone number")}
          placeholder={t("phone number")}
        />
        <SelectFromMenu {...countryData} />
        <SelectFromMenu {...validity} />
      </div>
      <SubmitBtn text={t("save")} />
    </form>
  );
};

export default Form;
