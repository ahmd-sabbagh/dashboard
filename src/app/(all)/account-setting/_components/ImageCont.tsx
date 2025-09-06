"use client";
import { camera, profile_default } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const ImageCont = () => {
  const t = useTranslations()
  const [preview, setPreview] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };
  const image = preview ? preview : profile_default;
  return (
    <div className="w-[144px] h-[144px] rounded-full border border-dashed border-[#919EAB33] flex-c mx-auto">
      <label
        htmlFor="photo"
        className="relative flex-c w-[128px] h-[128px] rounded-full overflow-hidden bg-white"
      >
        <div className="absolute w-full h-full flex-c bg-black/30 z-10">
          <div>
            <div className="w-8 h-8 relative mx-auto">
              <Image
                src={camera}
                alt="camera icon"
                loading="lazy"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="text-white text-center text-xs">{t("Choose an image")}</span>
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          id="photo"
          className="hidden"
          onChange={handleImageChange}
        />
        <Image
          src={image}
          alt="profile image"
          fill
          loading="lazy"
          sizes="128px"
          className="object-cover"
        />
      </label>
    </div>
  );
};

export default ImageCont;
