import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="relative w-[161px] h-[47px] mx-auto block">
      <Image src={logo} alt="logo" fill priority sizes="161px" />
    </Link>
  );
};

export default Logo;
