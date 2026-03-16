import React from "react";

export default function NavSearch() {
  return (
    <div className="flex-grow max-w-2xl relative">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Search for 'Wooden Combs'" 
          className="w-full py-2.5 pl-10 pr-4 border border-[#00875A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00875A] text-sm"
        />
      </div>
    </div>
  );
}