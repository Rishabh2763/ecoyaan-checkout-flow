import React from "react";
import Navbar from "../../components/navbar/Navbar";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>
      {children}
    </>
  );
}