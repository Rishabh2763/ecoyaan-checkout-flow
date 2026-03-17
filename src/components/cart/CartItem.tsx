import React from "react";
import Image from "next/image"; 

interface CartItemProps {
  item: {
    product_id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    image: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-start gap-6 pb-8 border-b border-gray-100 last:border-none">
      
      {/* Checkbox */}
      <div className="pt-2 pl-2">
        <input 
          type="checkbox" 
          className="w-4 h-4 accent-[#00875A] rounded cursor-pointer" 
          defaultChecked 
        />
      </div>

      {/* Product Image (Larger, no border) */}
      <div className="flex-shrink-0">
        <Image
          src={item.image}
          alt={item.product_name}
          width={160}  // Increased size
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col pt-1">
        
        {/* Title, Subtext, and Action Icons */}
        <div className="flex justify-between items-start gap-4">
          <div>
            {/* Using a slightly smaller font, tight leading, just like the reference */}
            <h3 className="font-semibold text-gray-900 text-[15px] leading-snug">
              {item.product_name}
            </h3>
            {/* Placeholder description (You can map this from your item data later) */}
            <p className="text-gray-500 text-[13px] mt-2 line-clamp-2">
              Fluorite Bottle — Hydrate with Clarity & Positive Energy Stay refreshed while embracing the harmonizing and clarifying energy...
            </p>
            {/* Price */}
            <div className="font-bold text-lg text-gray-900 mt-4">
              ₹{item.product_price}
            </div>
          </div>

          {/* Action Icons (Heart, Copy, Trash) */}
          <div className="flex items-center gap-4 text-[#00875A] shrink-0 pt-1 pr-2">
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>

        {/* Bottom Row: Quantity & Save for later */}
        <div className="flex justify-between items-end mt-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-700">Qty:</span>
              <div className="flex items-center border border-gray-200 rounded h-8">
                <button className="px-3 text-gray-500 hover:bg-gray-50 border-r border-gray-200">-</button>
                <span className="px-4 text-sm font-medium">{item.quantity}</span>
                <button className="px-3 text-gray-500 hover:bg-gray-50 border-l border-gray-200">+</button>
              </div>
            </div>
            
            {/* Material Detail */}
            <p className="text-xs text-gray-500 mt-1">
              <span className="font-semibold text-gray-800">Material:</span> Fluorite
            </p>
          </div>

          <button className="text-[13px] text-[#00875A] hover:underline font-medium pr-2">
            Save for later
          </button>
        </div>

      </div>
    </div>
  );
}