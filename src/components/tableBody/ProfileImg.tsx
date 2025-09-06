import { profile_default } from "@/assets";
import Image from "next/image";
import React from "react";
interface Props {
  image?: string;
}

const ProfileImg: React.FC<Props> = ({ image }) => {
  const img = image ? image : profile_default;
  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
      <Image src={img} alt="profile img" fill loading="lazy" sizes="40px" />
    </div>
  );
};

export default ProfileImg;
