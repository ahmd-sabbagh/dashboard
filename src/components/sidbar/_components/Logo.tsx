"use client";
import { logo } from "@/assets";
import { useAppDispatch } from "@/toolkit/hooks";
import { setFalse } from "@/toolkit/slices/openMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const dispatch = useAppDispatch();
  return (
    <Link
      href={"/"}
      className="relative w-[161px] h-[47px] mx-auto block"
      onClick={() => dispatch(setFalse())}
    >
      <Image src={logo} alt="logo" fill priority sizes="161px" />
    </Link>
  );
};

export default Logo;
