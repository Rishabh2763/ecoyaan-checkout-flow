"use client";

import React,{useMemo} from "react";
import Link from "next/link";
import { useCheckoutData } from "../../../context/CheckoutContext";

export default function SuccessPage() {
  const { shippingAddress, grandTotal } = useCheckoutData();
  const orderId = useMemo(() => {
    return Math.floor(Math.random() * 90000) + 10000;
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      {/* 1. Animated Success Icon */}
      <div className="w-20 h-20 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6 animate-bounce">
        <svg className="w-10 h-10 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* 2. Main Message */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Your order <span className="font-mono font-bold text-gray-800">#ECO-{orderId}</span> has been placed.
      </p>

      {/* 3. Delivery Card */}
      <div className="w-full max-w-md bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-left">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-white rounded-lg shadow-sm">🚚</div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Estimated Delivery</p>
            <p className="text-sm font-semibold text-gray-800">Thursday, 19th March — 21st March</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Shipping To</p>
          <p className="text-sm text-gray-700">
            {shippingAddress?.fullName}, {shippingAddress?.city}
          </p>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link 
          href="/" 
          className="flex-1 bg-[#00875A] text-white font-bold py-3 rounded-xl hover:bg-[#00734d] transition-all"
        >
          Continue Shopping
        </Link>
        <button 
          onClick={() => window.print()}
          className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all"
        >
          Download Invoice
        </button>
      </div>

      {/* 5. Sustainable Fact (On-brand for Ecoyaan) */}
      <div className="mt-12 p-4 bg-[#f0fdf4] border border-[#dcfce7] rounded-lg max-w-sm">
        <p className="text-xs text-[#00875A] leading-relaxed">
          <strong>Eco-Impact:</strong> By choosing this order, you&apos;ve helped reduce approximately 1.2kg of plastic waste. Way to go! 🌱
        </p>
      </div>
    </main>
  );
}