"use client";
import { DashboardLineChart } from "@/components/charts/ChartLineMultiple";
import { useTranslations } from "next-intl";
import React from "react";

const Chart = () => {
  const t = useTranslations()
  const chartData = [
    { month: "January", users: 120, sales: 300 },
    { month: "February", users: 200, sales: 450 },
    { month: "March", users: 150, sales: 400 },
    { month: "April", users: 220, sales: 500 },
    { month: "May", users: 280, sales: 800 },
    { month: "Jun", users: 210, sales: 600 },
    { month: "Jul", users: 140, sales: 350 },
  ];
  const descriptionData = {
    one:t("New memberships"),
    two:t("Active users")
  }
  return (
    <div className="mt-6">
      <DashboardLineChart
        title={t("Growth rate")}
        description={descriptionData}
        data={chartData}
        xKey="month"
        series={[
          { key: "users", label: "Users", color: "#00A76F" },
          { key: "sales", label: "Sales", color: "#FFAB00" },
        ]}
      />
    </div>
  );
};

export default Chart;
