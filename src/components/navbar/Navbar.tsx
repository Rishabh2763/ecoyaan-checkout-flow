import React from "react";
import NavLogo from "./NavLogo";
import NavLocation from "./NavLocation";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* 1. Added flex-wrap so items can drop to a new line if needed
        2. Added gap-y-4 to give vertical spacing when the search bar drops down
      */}
      <div className="w-full mx-auto px-4 md:px-12 py-3 flex flex-wrap items-center justify-between gap-y-4">
        
        {/* LEFT COLUMN: Logo */}
        <div className="flex items-center">
          <NavLogo />
        </div>

        {/* RIGHT COLUMN: Actions (Moves to top-right next to Logo on Mobile) */}
        <div className="flex items-center order-2 md:order-3">
          <NavActions />
        </div>

        {/* CENTER COLUMN: Location + Search 
            Drops to row 2 on mobile (order-3, w-full). 
            Sits in the middle on desktop (md:order-2, md:flex-1).
        */}
        <div className="w-full md:flex-1 md:w-auto flex items-center justify-center gap-6 order-3 md:order-2 md:px-8">
          <NavLocation />
          <NavSearch />
        </div>

      </div>
    </header>
  );
}