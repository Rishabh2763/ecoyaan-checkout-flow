"use client";

import React from "react";
import Link from "next/link";
import OrderSummary from "./OrderSummary";
import SavingsBanner from "./SavingsBanner";
import CartItem from "./CartItem";
// Adjust this import path to where your context is!
import { useCheckoutData } from "../../context/CheckoutContext"; 

export default function CartContent() {
  // Pull all our dynamic state from the context!
  const { 
    cartItems, 
    subtotal, 
    shippingFee, 
    discount, 
    grandTotal, 
    loading 
  } = useCheckoutData();

  // Prevent a hydration flicker while StoreInitializer loads the data
  if (loading) {
    return <div className="py-20 text-center text-gray-500">Loading your cart...</div>;
  }

  return (
    <>
      {/* Modular Components - Now reacting to Context! */}
      <div className="mb-6">
        <OrderSummary 
          subtotal={subtotal} 
          shippingFee={shippingFee} 
          grandTotal={grandTotal} 
        />
      </div>

      {/* WhatsApp Link */}
      <div className="mb-12">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#00875A] transition-colors border-b border-gray-300 pb-0.5">
          <svg className="w-5 h-5 text-[#00875A]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          Chat with us on WhatsApp
        </a>
      </div>

      <SavingsBanner discountApplied={discount} />

      {/* Delivery Address Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-lg font-bold text-gray-900">Delivery address:</h2>
          <Link 
            href="/shipping"
            className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded text-sm hover:border-[#00875A] hover:text-[#00875A] transition-colors"
          >
            Add address
          </Link>
        </div>
        <p className="text-sm text-gray-500">No default address set. Please add an address.</p>
      </div>

      {/* Items List Header */}
      <div className="bg-[#f0f6f8] px-6 py-4 rounded-md flex justify-between items-center mb-6">
        <h2 className="font-bold text-gray-900">List of added items</h2>
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
          <input type="checkbox" className="w-4 h-4 accent-[#00875A] rounded" defaultChecked />
          Deselect All Products
        </label>
      </div>
      
      {/* Items List - Mapping over CONTEXT data, not SSR data */}
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>
    </>
  );
}