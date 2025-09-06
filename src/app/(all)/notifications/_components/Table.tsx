import { TableHeader } from "@/components";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import TableBody from "./TableBody";

const Table = () => {
  const t = useTranslations();
  const headData = [
    t("Notification title"),
    t("Notification type"),
    t("the condition"),
    t("Publication date"),
  ];
  const data = [
    {
      id: "1",
      notification_title: "تم اضافة وظيقة جديدة",
      notification_type: "عضوية جديدة",
      status: "تم الارسال",
      status_: "active",
      publication_date: "15/8/2025",
    },
    {
      id: "2",
      notification_title: "تم اضافة وظيقة جديدة",
      notification_type: "عضوية جديدة",
      status: "تم الارسال",
      status_: "active",
      publication_date: "15/8/2025",
    },
    {
      id: "3",
      notification_title: "تم اضافة وظيقة جديدة",
      notification_type: "عضوية جديدة",
      status: "تم الارسال",
      status_: "active",
      publication_date: "15/8/2025",
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
    <div className="mt-6 border-t border-white">
      <TableHeader
        allSelected={allSelected}
        isIndeterminate={isIndeterminate}
        onSelectAll={handleSelectAll}
        headData={headData}
        className="md:grid-cols-6"
      />
      <TableBody
        data={data}
        selectedIds={selectedIds}
        onToggleRow={handleToggleRow}
        className="grid-cols-6"
      />
    </div>
  );
};

export default Table;
