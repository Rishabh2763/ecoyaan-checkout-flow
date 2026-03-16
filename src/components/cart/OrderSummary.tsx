import React from "react";
import Link from "next/link";

interface OrderSummaryProps {
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
}
  
export default function OrderSummary({ subtotal, shippingFee, grandTotal }: OrderSummaryProps) {
  return (
    <div className="border-b pb-6 mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-600">Subtotal:</span>
        <span className="text-gray-600 font-medium">₹{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Delivery Fee:</span>
        <span className={shippingFee === 0 ? "text-green-600 font-medium" : "text-gray-600 font-medium"}>
          {shippingFee === 0 ? "Free Delivery" : `₹${shippingFee.toLocaleString()}`}
        </span>
      </div>
      
      <div className="flex justify-between items-center text-lg font-bold mb-6 border-t pt-4">
        <span>Total:</span>
        <span>₹{grandTotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-end">
        <Link 
          href="/shipping" 
          className="bg-[#00875A] hover:bg-[#00734d] text-white font-semibold py-2.5 px-6 rounded-md transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}