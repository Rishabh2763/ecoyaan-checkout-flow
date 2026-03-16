"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCheckoutData } from "../../../context/CheckoutContext"; 

export default function PaymentPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("online");

  const { 
    cartItems, 
    shippingAddress, 
    subtotal, 
    shippingFee, 
    discount, 
    grandTotal, 
    loading 
  } = useCheckoutData();

  const finalPayable = paymentMethod === "cod" ? grandTotal + 49 : grandTotal;

  const handlePayment = () => {
    if (!shippingAddress) {
      alert("Please add a shipping address before proceeding.");
      return;
    }
    router.push("/success");
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex justify-center items-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Address & Payment Methods */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Address Section (UPDATED to match your green theme design!) */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            
            {/* "Delivering to" Header with Icons */}
            <div className="flex justify-between items-center mb-4 cursor-pointer">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-base font-bold text-gray-900">Delivering to</h2>
              </div>
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Dynamic User Details matching your screenshot */}
            {/* Dynamic User Details matching your screenshot */}
            {shippingAddress ? (
              <div className="mt-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-bold text-[#00875A]">{shippingAddress.fullName}</p>
                  <button 
                    onClick={() => router.push("/shipping")} 
                    className="px-4 py-1.5 text-sm font-medium text-[#00875A] bg-white border border-[#00875A] rounded-full hover:bg-[#E6F4EA] transition-colors"
                  >
                    Change
                  </button>
                </div>
                
                <div className="text-sm text-gray-600 leading-relaxed max-w-[85%] space-y-1">
                  {/* 1. Display the new detailed address field */}
                  <p className="text-gray-800 font-medium">{shippingAddress.address}</p>
                  
                  {/* 2. Display City, State, and PIN */}
                  <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pinCode}</p>
                  
                  {/* 3. Display Contact Info */}
                  <p className="text-gray-500">{shippingAddress.email}</p>
                  
                  <p className="mt-3 text-gray-800">
                    <span className="font-semibold text-gray-900">Phone:</span> {shippingAddress.phone}
                  </p>
                </div>
                
                {/* Optional: Add a "Deliver here" tag or similar visual cue */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2 py-1 bg-[#E6F4EA] text-[#00875A] text-[10px] font-bold uppercase rounded">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Home Address
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <Link href="/shipping" className="inline-flex items-center gap-2 bg-[#00875A] hover:bg-[#00734d] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                  <span>+</span> Add New Address
                </Link>
              </div>
            )}
          </div>

          {/* 2. Payment Method Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Pay Online Option */}
              <label 
                className={`relative flex flex-col p-4 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === "online" ? "border-[#00875A] bg-[#f0fdf4]" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-medium text-sm">Pay Online 🔥</span>
                  </div>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="online" 
                    checked={paymentMethod === "online"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-[#00875A] focus:ring-[#00875A]"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[#00875A] font-bold">₹{grandTotal}</span>
                  {discount > 0 && (
                    <span className="text-xs text-[#00875A] font-medium px-2 py-0.5 bg-[#dcfce7] rounded">SAVE ₹{discount}</span>
                  )}
                </div>
              </label>

              {/* Cash on Delivery Option */}
              <label 
                className={`relative flex flex-col p-4 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === "cod" ? "border-[#00875A] bg-[#f0fdf4]" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium text-sm text-gray-700">Cash on Delivery</span>
                  </div>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-[#00875A] focus:ring-[#00875A]"
                  />
                </div>
                <div className="mt-4">
                  <span className="font-bold text-gray-900">₹{grandTotal + 49}</span>
                  <span className="text-xs text-gray-500 block mt-1">(Includes ₹49 COD fee)</span>
                </div>
              </label>
            </div>

            <button 
              onClick={handlePayment}
              disabled={!shippingAddress}
              className={`w-full font-semibold py-3 rounded-md transition-colors duration-300 ${
                shippingAddress 
                  ? "bg-[#00875A] hover:bg-[#00734d] text-white" 
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Pay (₹{finalPayable})
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>100% secure payments • UPI • Cards • NetBanking</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary ({cartItems.length} items)</h2>
            
            <div className="max-h-[300px] overflow-y-auto pr-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.product_id} className="flex gap-4 mb-4 pb-4 border-b last:border-0 last:pb-0 last:mb-0">
                  <img src={item.image} alt={item.product_name} className="w-16 h-16 object-cover rounded border bg-gray-50 shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{item.product_name}</h3>
                    <p className="text-xs text-gray-500 mt-1">₹{item.product_price} x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center p-3 border rounded-md mb-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-2 text-[#00875A]">
                <span className="text-lg">🏷️</span>
                <span className="text-sm font-medium text-gray-800">Offers & Coupons</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-gray-900">
                  {shippingFee === 0 ? <span className="text-[#00875A]">FREE</span> : `₹${shippingFee}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#00875A]">
                  <span>Discount</span>
                  <span className="font-medium">-₹{discount}</span>
                </div>
              )}
              {paymentMethod === "cod" && (
                <div className="flex justify-between">
                  <span className="text-gray-600">COD Fee</span>
                  <span className="font-medium text-gray-900">₹49</span>
                </div>
              )}
            </div>

            <p className="text-[#3b82f6] text-xs font-medium cursor-pointer mb-4 hover:underline">Own a business? Enter your GSTIN!</p>
            
            <hr className="my-4" />
            
            <div className="flex justify-between items-end">
              <span className="text-lg font-bold text-gray-900">You Pay</span>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">₹{finalPayable}</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Including all taxes</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}