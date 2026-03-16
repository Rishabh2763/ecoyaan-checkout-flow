import React from "react";

const categories = [
  { name: "Beauty & Personal Care", icon: "💅" }, // Replace with real images later
  { name: "Kitchen & Home Care", icon: "🍳" },
  { name: "Bags & Accessories", icon: "👜" },
  { name: "Food & Beverages", icon: "🍽️" },
  { name: "Gifts & Festivals", icon: "🎁" },
  { name: "Mom & Baby", icon: "👶" },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center gap-4 cursor-pointer group">
            <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-4xl group-hover:shadow-md transition-shadow">
              {cat.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#00875A] transition-colors">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}