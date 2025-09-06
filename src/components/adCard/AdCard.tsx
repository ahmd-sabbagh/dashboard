import { pen } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./_components/Menu";
interface Props {
  image: string | StaticImageData;
  name: string;
  status: string;
  date: string;
}

const AdCard: React.FC<Props> = ({ image, name, status, date }) => {
  return (
    <div className="rounded-xl bg-white box-shadow">
      <div className="px-2 pt-2">
        <div className="relative w-full h-[164px] rounded-lg overflow-hidden">
          {image && (
            <Image
              src={image}
              alt="ad image"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="bg-[#50EE7029] text-[#50EE70] w-fit py-0.5 px-1.5 font-bold text-xs rounded-[6px]">
            {status}
          </p>
          <h3 className="mt-2 text-sm title-color line-clamp-1" title={name}>
            {name}
          </h3>
          <span className="text-gray mt-2 text-sm block">{date}</span>
        </div>
        <div className="flex items-center justify-end gap-6 ">
          <Link href={""} className="relative w-5 h-5 block">
            <Image src={pen} alt="pen icon" fill loading="lazy" sizes="20px" />
          </Link>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default AdCard;
