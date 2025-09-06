import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const BannerImage = () => {
  const t = useTranslations();
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
  return (
    <div className="">
      <h4 className="font-bold text-sm title-color">{t("Add a photo")}</h4>
      <label
        htmlFor="banner_photo"
        className="relative block h-[182px] rounded-lg overflow-hidden flex-c bg-[#72208D0D] border border-dashed border-[#72208D0D] mt-3 cursor-pointer"
      >
        <span className="text-main">{t("Add a photo")}</span>
        <input
          type="file"
          id="banner_photo"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {preview && (
          <Image
            src={preview}
            alt="banner image"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        )}
      </label>
    </div>
  );
};

export default BannerImage;
