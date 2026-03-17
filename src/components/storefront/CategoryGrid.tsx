import React from "react";


const categories = [
  { name: "Beauty &\nPersonal Care", icon: "💅" }, 
  { name: "Kitchen &\nHome Care", icon: "🍳" },
  { name: "Bags &\nAccessories", icon: "👜" },
  { name: "Food &\nBeverages", icon: "🍽️" },
  { name: "Gifts &\nFestivals", icon: "🎁" },
  { name: "Mom &\nBaby", icon: "👶" },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
        {categories.map((cat, index) => (
          // Added a gentle "lift" effect on hover to replace the old shadow
          <div key={index} className="flex flex-col items-center gap-4 cursor-pointer group hover:-translate-y-2 transition-transform duration-300">
            
            {/* Removed the circular background and border. Made the container and text much larger */}
            <div className="w-32 h-32 flex items-center justify-center text-[5rem] group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            
            {/* Set text to green by default and enabled whitespace-pre-line to respect the \n in our array */}
            <h3 className="text-[15px] font-bold text-[#00875A] whitespace-pre-line leading-snug">
              {cat.name}
            </h3>
            
          </div>
        ))}
      </div>
    </section>
  );
}