import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" py-8 flex flex-row justify-between">
      <div className="flex items-center space-x-4 ">
        <BaseLogo />
      </div>
    </header>
  );
}

const BaseLogo = () => (
  <Image
    src="/base-logo.webp"
    alt="Base Logo"
    className="w-10 h-10 object-contain"
    width={40}
    height={40}
  />
);
