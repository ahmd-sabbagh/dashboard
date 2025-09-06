import { Back } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import Form from "./_components/Form";

const AdministratorPage = () => {
  const t = useTranslations();
  return (
    <section className="p-4 lg:p-10">
      <div className="container">
        <Back text={t("Add an administrator")} href="/roles-and-powers" />
        <Form />
      </div>
    </section>
  );
};

export default AdministratorPage;
