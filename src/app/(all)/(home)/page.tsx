import React from "react";
import NumberAnalysis from "./_components/NumberAnalysis";
import Chart from "./_components/Chart";
import UsersTable from "../users/_components/UsersTable";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations()
  return (
    <section className="p-4 lg:p-10">
      <div className="container">
        <NumberAnalysis />
        <Chart />
        <div className="mt-6">
          <h3 className="text-xl font-bold title-color">{t("Latest membership applications")}</h3>
          <UsersTable />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
