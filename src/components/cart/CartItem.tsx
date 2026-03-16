import React from "react";
import Image from "next/image"; // 1. Import the Next.js Image component

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
    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="flex-shrink-0">
        {/* 2. Replace <img> with <Image /> */}
        <Image
          src={item.image}
          alt={item.product_name}
          width={112}  // w-28 is 7rem, which is 112px
          height={112} // h-28 is 112px
          className="w-28 h-28 object-cover rounded-md border"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-900 mb-1">{item.product_name}</h3>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-bold text-lg">₹{item.product_price}</span>
          </div>
        </div>

        {/* Quantity Controls (Visual MVP) */}
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-r">-</button>
            <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-l">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}