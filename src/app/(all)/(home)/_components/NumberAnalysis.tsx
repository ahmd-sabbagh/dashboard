import { useTranslations } from "next-intl";
import React from "react";
import NumberCard from "./NumberCard";
import { line1, line2, line3 } from "@/assets";

const NumberAnalysis = () => {
  const t = useTranslations();
  const data = [
    {
      title: t("Exchanged messages"),
      number: 28971,
      state: "+9.4%",
      icon: line1,
    },
    {
      title: t("Active users"),
      number: 28971,
      state: "+9.4%",
      icon: line2,
    },
    {
      title: t("Number of users"),
      number: 28971,
      state: "+9.4%",
      icon: line3,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, idx) => (
        <NumberCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default NumberAnalysis;
