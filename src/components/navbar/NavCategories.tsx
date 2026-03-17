"use client"; // Required for Next.js if you are using the App Router, since we are adding useState

import React, { useState } from "react";
import { megaMenuData } from "@/data/categoryData"; // Adjust path as needed

export default function NavCategories() {
  // State to track which brand tab is currently active
  const [activeBrandTab, setActiveBrandTab] = useState("Premium");

  return (
    <div className="hidden md:flex justify-center gap-8 pt-4 pb-2 text-[15px] font-medium text-gray-800 relative w-full z-40 border-b border-gray-100">
      
      {/* STATIC: "All" Button */}
      <button className="flex items-center gap-2 hover:text-[#00875A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#00875A]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> 
        All
      </button>

      {/* DYNAMIC: Mega Menu Categories */}
      {megaMenuData.map((category, index) => (
        <div key={index} className="group relative">
          
          <button className="flex items-center gap-1 hover:text-[#00875A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#00875A]">
            {category.label}
            <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {/* Conditional Rendering: Check if the category is "Brands" */}
          {category.label === "Brands" ? (
            
            /* --- BRANDS TABBED LAYOUT --- */
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 rounded-b-lg p-6 w-[600px] transition-all duration-300">
              
              {/* Tab Headers */}
              <div className="flex gap-8 border-b border-gray-100 mb-6">
                {category.subCategories.map((tab) => (
                  <button
                    key={tab.title}
                    onMouseEnter={() => setActiveBrandTab(tab.title)} // Changes tab on hover for a smoother feel
                    className={`pb-2 text-sm font-medium transition-all relative ${
                      activeBrandTab === tab.title ? "text-[#00875A]" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab.title}
                    {/* Active Tab Underline */}
                    {activeBrandTab === tab.title && (
                      <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#00875A]"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content (3-Column Grid) */}
              <div className="grid grid-cols-3 gap-y-4 gap-x-8 px-2">
                {category.subCategories
                  .find((tab) => tab.title === activeBrandTab)
                  ?.items.map((brand, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      // Custom styling for the "more" link to make it blue like in your design
                      className={`text-sm transition-colors ${
                        brand === "more" ? "text-blue-600 hover:text-blue-800 font-medium" : "text-gray-700 hover:text-[#00875A]"
                      }`}
                    >
                      {brand}
                    </a>
                  ))}
              </div>
            </div>

          ) : (

            /* --- STANDARD COLUMN LAYOUT (Beauty, Kitchen, etc.) --- */
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 rounded-b-lg p-8 w-max transition-all duration-300">
              <div className="flex gap-10">
                {category.subCategories.map((subCat, subIndex) => (
                  <div key={subIndex} className="flex flex-col min-w-[140px]">
                    <h3 className="text-[#00875A] font-semibold mb-4 text-sm">
                      {subCat.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {subCat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a href="#" className="text-gray-600 hover:text-[#00875A] hover:font-medium text-sm transition-colors block">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Promotional Image Placeholder (Optional) */}
              <div className="ml-10 w-[200px] bg-[#d8e8e3] rounded-md flex items-center justify-center overflow-hidden relative shrink-0">
                <span className="text-[#00875A] font-semibold text-center px-4">
                  {category.label} Promo
                </span>
              </div>
            </div>

          )}
        </div>
      ))}

      {/* STATIC: "B2B Services" Button */}
      <button className="hover:text-[#00875A] border-b-2 border-transparent hover:border-[#00875A] transition-colors pb-2">
        B2B Services
      </button>
      
    </div>
  );
}