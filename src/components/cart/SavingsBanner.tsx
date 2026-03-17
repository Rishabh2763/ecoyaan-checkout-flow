import React from "react";

interface SavingsBannerProps {
  discountApplied: number;
}

export default function SavingsBanner({ discountApplied }: SavingsBannerProps) {
  if (discountApplied > 0) {
    return (
      <div className="bg-[#E6F4EA] border border-[#A5D8B9] rounded-lg p-4 mb-12 flex items-start gap-3">
        <span className="text-[#00875A] text-xl">✨</span>
        <div>
          <p className="text-[#00875A] font-semibold">You saved ₹{discountApplied} in total</p>
          <p className="text-sm text-[#00875A] mt-1">Great choice! You are making sustainable shopping more rewarding.</p>
        </div>
      </div>
    );
  }

  // If you don't want the default "Sustainable Choice" banner to show up at all
  // when there is no discount (to match the clean screenshot), you can return null here instead.
  return (
    <div className="bg-[#E6F4EA] border border-[#A5D8B9] rounded-lg p-4 mb-12 flex items-start gap-3">
      <span className="text-[#00875A] text-xl">🌱</span>
      <div>
        <p className="text-[#00875A] font-semibold">Sustainable Choice</p>
        <p className="text-sm text-[#00875A] mt-1">Every eco-friendly purchase makes a difference.</p>
      </div>
    </div>
  );
}