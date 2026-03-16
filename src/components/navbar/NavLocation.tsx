import React from "react";

export default function NavLocation() {
  return (
    <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
      <svg className="w-6 h-6 text-[#00875A]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      <div className="text-sm">
        <p className="text-gray-700">Chennai, 600009</p>
        <p className="text-[#6B52A3] text-xs font-medium cursor-pointer hover:underline">Update Location</p>
      </div>
    </div>
  );
}