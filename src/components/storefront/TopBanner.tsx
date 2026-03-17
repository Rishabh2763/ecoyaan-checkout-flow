import React from "react";

export default function TopBanner() {
  return (
    <div className="bg-[#218143] text-white text-xs md:text-sm font-semibold py-2 overflow-hidden whitespace-nowrap flex relative">
      <div className="animate-[marquee_20s_linear_infinite] flex shrink-0">
        <span className="mx-8">India's 1st GenAI-Powered Marketplace for Eco-Friendly & Healthy Living</span>
        <span className="mx-8 text-pink-300">🌸 Every Claim Verified by Ecoverify™ — Our GenAI-Powered Vetting Engine</span>
        <span className="mx-8">India's 1st GenAI-Powered Marketplace for Eco-Friendly & Healthy Living</span>
        <span className="mx-8 text-pink-300">🌸 Every Claim Verified by Ecoverify™ — Our GenAI-Powered Vetting Engine</span>
      </div>
    </div>
  );
}