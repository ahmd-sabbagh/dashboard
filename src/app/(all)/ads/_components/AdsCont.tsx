import { ads1, ads2, ads3, ads4, ads5, ads6 } from "@/assets";
import { AdCard } from "@/components";
import React from "react";

const AdsCont = () => {
  const data = [
    {
      image: ads1,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
    {
      image: ads2,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
    {
      image: ads3,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
    {
      image: ads4,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
    {
      image: ads5,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
    {
      image: ads6,
      status: "مميز",
      name: "بنر تسويق للبرمجة و التصميم",
      date: "15/5/2025",
    },
  ];
  return (
    <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  xl:grid-cols-3 gap-6">
      {data.map((ad, idx) => (
        <AdCard {...ad} key={idx} />
      ))}
    </div>
  );
};

export default AdsCont;
