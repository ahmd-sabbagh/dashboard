import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface Item {
  num: string;
  key: string;
}
interface Props {
  state: Item;
  setState: (value: Item) => void;
}

const Filter: React.FC<Props> = ({ state, setState }) => {
  const t = useTranslations();
  const [open, setOpen] = useState<boolean>(false);
  const data = [
    {
      num: "80",
      key: "all",
    },
    {
      num: "18",
      key: "published",
    },
    {
      num: "22",
      key: "under_construction",
    },
  ];
  return (
    <div className="relative">
      {/* web */}
      <div className="hidden mt-6 md:flex items-center gap-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex items-center gap-2 py-[13px] cursor-pointer",
              item.key === state.key && "border-b-2"
            )}
            onClick={() => setState(item)}
          >
            <div
              className={cn(
                "px-[5px] py-1 rounded-lg text-xs font-bold",
                item.key === "all"
                  ? "bg-[#326CFF] text-white"
                  : item.key === "published"
                  ? "bg-[#50EE7029] text-[#50EE70]"
                  : "bg-[#FFDF3C29] text-[#FDB15C]"
              )}
            >
              {item.num}
            </div>
            <p
              className={cn(
                "font-bold text-sm",
                item.key === state.key ? "title-color" : "desc-color"
              )}
            >
              {t(item.key)}
            </p>
          </div>
        ))}
      </div>
      {/* mobile */}
      <div className="relative md:hidden mt-6">
        <button
          type="button"
          className="p-4 w-full flex items-center justify-between border border-color rounded-2xl bg-white"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "px-[5px] py-1 rounded-lg text-xs font-bold",
                state.key === "all"
                  ? "bg-[#326CFF] text-white"
                  : state.key === "published"
                  ? "bg-[#50EE7029] text-[#50EE70]"
                  : "bg-[#FFDF3C29] text-[#FDB15C]"
              )}
            >
              {state.num}
            </div>
            <p
              className={cn(
                "font-bold text-sm",
                state.key === state.key ? "title-color" : "desc-color"
              )}
            >
              {t(state.key)}
            </p>
          </div>
          <span>
            <IoIosArrowDown />
          </span>
        </button>
        {open && (
          <div className=" absolute w-full start-0 top-[100%] bg-white z-50 rounded-2xl box-shadow p-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-2 py-[13px] cursor-pointer"
                )}
                onClick={() => {
                  setState(item);
                  setOpen(false);
                }}
              >
                <div
                  className={cn(
                    "px-[5px] py-1 rounded-lg text-xs font-bold",
                    item.key === "all"
                      ? "bg-[#326CFF] text-white"
                      : item.key === "published"
                      ? "bg-[#50EE7029] text-[#50EE70]"
                      : "bg-[#FFDF3C29] text-[#FDB15C]"
                  )}
                >
                  {item.num}
                </div>
                <p
                  className={cn(
                    "font-bold text-sm",
                    item.key === state.key ? "title-color" : "desc-color"
                  )}
                >
                  {t(item.key)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
