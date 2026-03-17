import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CheckoutProvider } from "../context/CheckoutContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecoyaan Checkout",
  description: "Sustainability made easy",
  icons: {
    icon: "/logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <CheckoutProvider>  
          {/* PAGE CONTENT */}
          {children}
        </CheckoutProvider>
      </body>
    </html>
  );
}