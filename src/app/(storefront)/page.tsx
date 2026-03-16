import React from "react";
import NavCategories from "../../components/navbar/NavCategories";
import HeroSection from "../../components/storefront/HeroSection";
import CategoryGrid from "../../components/storefront/CategoryGrid";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* NavCategories stays here because it's only for the landing page! */}
      <NavCategories /> 
      <HeroSection />
      <CategoryGrid />
    </main>
  );
}