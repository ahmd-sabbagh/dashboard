import { bell,profile_default, search, setting } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnMenu from "./_components/BtnMenu";

const Navbar: React.FC = () => {
  return (
    <header className="px-4 md:px-10 py-3 md:py-5 bg-white/25 backdrop-blur-[2px] sticky top-0 start-0 md:relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BtnMenu />
            <button type="button" className="w-5 h-5 block relative">
              <Image
                src={search}
                alt="search icon"
                priority
                fill
                sizes="20px"
              />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <Link href={"/notifications"} className="block relative w-6 h-6">
              <div className=" absolute w-5 h-5 rounded-full bg-[#FE5D5D] flex-c -top-3 end-3 text-white font-bold text-xs">
                1
              </div>
              <Image src={bell} alt="bell icon" priority fill sizes="26px" />
            </Link>
            <Link href={""} className="block relative w-6 h-6">
              <Image
                src={setting}
                alt="setting icon"
                priority
                fill
                sizes="26px"
              />
            </Link>
            <Link
              href={"/account-setting"}
              className="w-10 h-10 rounded-full flex-c border-2 border-white/20"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden relative border-2 border-white bg-white">
                <Image
                  src={profile_default}
                  alt="profile image"
                  priority
                  fill
                  sizes="36px"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
