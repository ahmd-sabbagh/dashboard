"use client";

import { TableBody, TableHeader } from "@/components";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Table = () => {
  const t = useTranslations();
  const headData = [
    t("user name"),
    t("email"),
    t("Role and authority"),
    t("the condition"),
    t("Joining date"),
  ];
  const data = [
    {
      id: "1",
      image: "",
      name: "أحمد حسام الدين ابراهيم",
      email: "Ahmed.hossam@gmail.com",
      role_and_authority: "مسؤول اساسي",
      status: "نشط",
      status_: "active",
      join_date: "15/8/2025",
    },
    {
      id: "2",
      image: "",
      name: "أحمد حسام الدين ابراهيم",
      email: "Ahmed.hossam@gmail.com",
      role_and_authority: "مسؤول",
      status: "نشط",
      status_: "active",
      join_date: "15/8/2025",
    },
    {
      id: "3",
      image: "",
      name: "أحمد حسام الدين ابراهيم",
      email: "Ahmed.hossam@gmail.com",
      role_and_authority: "مشرف",
      status: "نشط",
      status_: "active",
      join_date: "15/8/2025",
    },
  ];
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const allSelected = selectedIds.length === data.length;
  const isIndeterminate =
    selectedIds.length > 0 && selectedIds.length < data.length;
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(data.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };
  const handleToggleRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };
  return (
    <section className="mt-6">
      <div className="container box-shadow-md">
        <TableHeader
          allSelected={allSelected}
          isIndeterminate={isIndeterminate}
          onSelectAll={handleSelectAll}
          headData={headData}
          className="md:grid-cols-7"
        />
        <TableBody
          data={data}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          className="grid-cols-7"
        />
      </div>
    </section>
  );
};

export default Table;
