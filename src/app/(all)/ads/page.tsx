import { PageHeaderFilter } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import AdsCont from "./_components/AdsCont";

const AdsPage = () => {
  const t = useTranslations();
  return (
    <section className="p-4 lg:p-10">
      <PageHeaderFilter title={t("Advertisements and banners")} href="/add-banner" />
      <AdsCont />
    </section>
  );
};

export default AdsPage;
