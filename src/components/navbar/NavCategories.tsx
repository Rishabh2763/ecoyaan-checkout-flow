import React from "react";

export default function NavCategories() {
  return (
    <div className="hidden md:flex justify-center gap-6 py-3 text-sm font-medium text-gray-700">
      <button className="flex items-center gap-1 hover:text-[#00875A]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg> All
      </button>
      <button className="hover:text-[#00875A] transition-colors">Beauty & Personal Care ⌄</button>
      <button className="hover:text-[#00875A] transition-colors">Kitchen & Home Care ⌄</button>
      <button className="hover:text-[#00875A] transition-colors">Bags & Accessories ⌄</button>
      <button className="hover:text-[#00875A] transition-colors">Food & Beverages ⌄</button>
      <button className="hover:text-[#00875A] border-b-2 border-[#00875A] pb-1">B2B Services</button>
    </div>
  );
}