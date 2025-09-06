"use client";
import { Input, SubmitBtn } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

const Form = () => {
  const t = useTranslations();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="mt-6 md:mt-10">
      <div className="py-4 px-6 bg-white rounded-2xl flex flex-col gap-6 box-shadow">
        <Input
          lable={t("Notification title")}
          condition="top"
          placeholder={t("Notification title placeholder")}
        />
        <div>
          <label htmlFor="details" className="text-sm font-bold mb-3 block">{t("Notification details")}</label>
          <textarea
            id="details"
            placeholder={t("Notification details placeholder")}
            className="py-2 px-[14px] w-full h-[123px] rounded-2xl border border-color"
          ></textarea>
        </div>
      </div>
      <SubmitBtn text={t("Save and add")} />
    </form>
  );
};

export default Form;
