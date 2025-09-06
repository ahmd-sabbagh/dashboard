import { PageHeaderFilter } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import Table from "./_components/Table";

const RolesAndPowersPage = () => {
  const t = useTranslations();
  return (
    <section className="p-4 lg:p-10">
      <PageHeaderFilter title={t("Roles and powers")} href="/administrator" />
      <Table />
    </section>
  );
};

export default RolesAndPowersPage;
