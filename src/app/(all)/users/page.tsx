import { PageHeaderFilter } from "@/components";
import React from "react";
import UsersTable from "./_components/UsersTable";
import { useTranslations } from "next-intl";

const UsersPage = () => {
  const t = useTranslations()
  return (
    <section className="p-4 lg:p-10">
      <PageHeaderFilter title={t("Users")} href="" />
      <UsersTable />
    </section>
  );
};

export default UsersPage;
