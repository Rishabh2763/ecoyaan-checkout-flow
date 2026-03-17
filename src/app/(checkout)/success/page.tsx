"use client";

import React, { useState, useEffect } from "react";
import { useCheckoutData } from "../../../context/CheckoutContext";

import OrderHeader from "../../../components/success/OrderHeader";
import DeliveryCard from "../../../components/success/DeliveryCard";
import ActionButtons from "../../../components/success/ActionButtons";
import EcoImpactBanner from "../../../components/success/EcoImpactBanner";

export default function SuccessPage() {
  const { shippingAddress, setCartData } = useCheckoutData();
  const [orderId, setOrderId] = useState<number | null>(null);

  useEffect(() => {
    // 2. Generate ID only on the client
    const generatedId = Math.floor(Math.random() * 90000) + 10000;
    setOrderId(generatedId);

    // 3. INFINITE RENDER FIX: Clear cart only once when component mounts
    if (setCartData) {
      setCartData({
        cartItems: [],
        shipping_fee: 0,
        discount_applied: 0
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      {/* 4. Pass the orderId (will be null for a split second, then the number) */}
      <OrderHeader orderId={orderId ?? 0} />
      
      <DeliveryCard shippingAddress={shippingAddress} />
      
      <ActionButtons />
      
      <EcoImpactBanner />
    </main>
  );
}