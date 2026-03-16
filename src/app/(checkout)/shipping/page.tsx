"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCheckoutData } from "@/context/CheckoutContext";

// 1. Updated interface to include the address field
interface ShippingFormValues {
  fullName: string;
  email: string;
  phone: string;
  address: string; // <--- ADDED HERE
  pinCode: string;
  city: string;
  state: string;
}

export default function ShippingPage() {
  const router = useRouter();
  const { saveShippingAddress } = useCheckoutData(); 

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormValues>({
    mode: "onTouched",
  });

  const onSubmit = (data: ShippingFormValues) => {
    saveShippingAddress(data); 
    router.push("/confirm-payment");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-10 text-gray-900 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Delivery Address</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Jane Doe"
              {...register("fullName", { required: "Full Name is required" })}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="10-digit mobile number"
                {...register("phone", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number"
                  }
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* NEW: Street Address Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Flat, House no., Building, Company, Apartment</label>
            <textarea
              rows={3}
              placeholder="e.g. Flat 4B, Green Apartments, 12th Cross Street..."
              {...register("address", { required: "Street address is required" })}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 resize-none ${
                errors.address ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
              }`}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* PIN Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
              <input
                type="text"
                placeholder="6 digits"
                {...register("pinCode", { 
                  required: "PIN Code is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Please enter a valid 6-digit PIN code"
                  }
                })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.pinCode ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
                }`}
              />
              {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode.message}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                placeholder="e.g. Chennai"
                {...register("city", { required: "City is required" })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.city ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
                }`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                placeholder="e.g. Tamil Nadu"
                {...register("state", { required: "State is required" })}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.state ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
                }`}
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#00875A] hover:bg-[#00734d] text-white font-semibold py-3 px-4 rounded-md transition-colors"
            >
              Save Address & Continue
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}