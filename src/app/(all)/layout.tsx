import { header_footer_web } from "@/assets";
import { Navbar, Sidebar } from "@/components";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="md:flex md:items-start relative">
        <Sidebar />
        <section className="relative grow">
          <div
            className=" absolute w-full h-[242px] md:h-[349px] bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${header_footer_web.src})` }}
          />
          <section>
            <Navbar />
            {children}
          </section>
        </section>
      </main>
    </>
  );
}
