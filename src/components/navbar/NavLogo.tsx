import Link from "next/link";
import React from "react";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <div className="w-10 h-10 bg-[#E6F4EA] rounded-full flex items-center justify-center text-[#00875A]">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M21.5 10.9L16 6.5C15.5 6 14.8 6 14 6.5L9.5 9.5C9 9.8 8.8 10.5 9 11L11.5 17.5C11.8 18.2 12.5 18.5 13.2 18.2L20.2 14.8C20.8 14.5 21.2 14 21.5 13.2C21.8 12.5 21.8 11.5 21.5 10.9Z" />
          <path d="M12.5 4.5L7 8.5C6.5 8.9 6.2 9.5 6 10.2L4 16.5C3.8 17.2 4.2 18 4.8 18.2C5.5 18.5 6.2 18.2 6.5 17.5L9 11.5C9.2 10.8 10 10.5 10.8 10.8L16.2 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-[#00875A] text-2xl font-bold leading-none tracking-tight">Ecoyaan</h1>
        <p className="text-[#00875A] text-[11px] font-medium mt-0.5">Sustainability made easy</p>
      </div>
    </Link>
  );
}