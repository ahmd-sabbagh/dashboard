"use client";

import { Input, OpacityScreen, RadioBtn, SubmitBtn } from "@/components";
import { useTranslations } from "next-intl";
import { useState } from "react";
import BannerImage from "./BannerImage";
import Modal from "./Modal";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { faild_x, success_right } from "@/assets";

const Form = () => {
  const t = useTranslations();

  const [bannerStatus, setBannerStatus] = useState<string>(
    "distinctive_and_active"
  );
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>();

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
    setStatus("done");
  };
  return (
    <>
      {open && (
        <OpacityScreen className="flex-c px-5" state={open}>
          <Modal
            ref={ref}
            setState={setOpen}
            icon={status === "done" ? success_right : faild_x}
            text={
              status === "done"
                ? t("Published successfully")
                : t("Deployment was not successful")
            }
          />
        </OpacityScreen>
      )}
      <form onSubmit={onSubmit} className="mt-6 md:mt-10">
        <div className="py-4 px-6 bg-white rounded-2xl flex flex-col gap-6 box-shadow">
          <Input
            lable={t("Banner name")}
            condition="top"
            placeholder={t("baner name blaceholder")}
          />
          <div>
            <h4 className="font-bold text-sm title-color">
              {t("Banner status")}
            </h4>
            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row mt-2">
              <RadioBtn
                state={bannerStatus}
                setState={setBannerStatus}
                value="distinctive_and_active"
                title={t("Distinctive and active")}
              />
              <RadioBtn
                state={bannerStatus}
                setState={setBannerStatus}
                value="active"
                title={t("active")}
              />
              <RadioBtn
                state={bannerStatus}
                setState={setBannerStatus}
                value="not_activated"
                title={t("Not activated")}
              />
            </div>
          </div>
          <BannerImage />
        </div>
        <SubmitBtn text={t("Save and add")} />
      </form>
    </>
  );
};

export default Form;
