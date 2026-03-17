import Link from "next/link";
import React from "react";

export default function NavActions() {
  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      {/* Profile */}
      <button className="w-12 h-12 border border-[#00875A] rounded-full flex items-center justify-center text-[#00875A] hover:bg-[#E6F4EA] transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Wishlist */}
      <button className="w-12 h-12 flex items-center justify-center text-[#00875A] hover:bg-[#E6F4EA] rounded-full transition-colors">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Cart */}
      <Link href="/cart" className="relative w-12 h-12 flex items-center justify-center text-[#00875A] hover:bg-[#E6F4EA] rounded-full transition-colors">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        <span className="absolute -top-1.5 -right-1.5 bg-[#00875A] text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
          1
        </span>
      </Link>
    </div>
  );
}