import React from "react";
import NavLogo from "./NavLogo";
import NavLocation from "./NavLocation";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* 1. Changed to w-full for an edge-to-edge layout
        2. Increased padding (px-6 md:px-12) to give breathing room on the edges 
      */}
      <div className="w-full mx-auto px-6 md:px-12 py-3 flex items-center justify-between border-b border-gray-100">
        
        {/* LEFT COLUMN: Logo */}
        {/* flex-1 gives it equal width as the right column, justify-start pins it left */}
        <div className="flex-1 flex justify-start">
          <NavLogo />
        </div>

        {/* CENTER COLUMN: Location + Search */}
        {/* flex-[2] makes this middle section wider to accommodate the search bar */}
        <div className="flex-[2] flex items-center justify-center gap-6">
          <NavLocation />
          <NavSearch />
        </div>

        {/* RIGHT COLUMN: Actions */}
        {/* flex-1 matches the left column, justify-end pins the icons to the far right */}
        <div className="flex-1 flex justify-end">
          <NavActions />
        </div>

      </div>
    </header>
  );
}