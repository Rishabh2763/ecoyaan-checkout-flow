import React from "react";
import NavLogo from "./NavLogo";
import NavLocation from "./NavLocation";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4 md:gap-8 border-b border-gray-100">
        <NavLogo />
        <NavLocation />
        <NavSearch />
        <NavActions />
      </div>
    </header>
  );
}