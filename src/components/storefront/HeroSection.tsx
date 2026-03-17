import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row h-[400px] bg-[#d8e8e3]">
      {/* Left Content Area */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        <div className="flex items-center gap-2 mb-8">
            
            <Image 
              src="/logo.svg" 
              alt="Ecoyaan Logo" 
              width={36} 
              height={36} 
              className="flex-shrink-0"
              priority 
            />
            
            <div>
              <h2 className="text-lg font-bold text-[#00875A] leading-tight">Ecoyaan</h2>
              {/* Optional: You can change text-gray-600 to text-[#009B8B] to match your NavLogo! */}
              <p className="text-[10px] text-[#009B8B] font-medium">Sustainability made easy</p>
            </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md leading-tight">
          Create a healthier home with our eco-friendly kitchen and homecare products
        </h2>
        
        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white opacity-100"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
        </div>
      </div>

      {/* Right Image Area (Placeholder) */}
      <div className="md:w-1/2 bg-gray-300 h-full flex items-center justify-center text-gray-500">
        <p>[ Hero Image Placeholder ]</p>
      </div>
    </section>
  );
}