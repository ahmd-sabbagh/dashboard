"use client";
import { closeX, menu } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/toolkit/hooks";
import { toggle } from "@/toolkit/slices/openMenu";
import Image from "next/image";
import React from "react";

const BtnMenu = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.menu.value);
  const image = status ? closeX : menu;
  return (
    <>
      <button
        type="button"
        className="w-5 h-5 block relative lg:hidden"
        onClick={() => {
          dispatch(toggle());
        }}
      >
        <Image src={image} alt="menu icon" priority fill sizes="20px" />
      </button>
    </>
  );
};

export default BtnMenu;
