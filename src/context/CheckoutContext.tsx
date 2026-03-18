"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Define our Types
export interface CartItem {
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string; 
  pinCode: string;
  city: string;
  state: string;
}

interface CheckoutContextType {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress | null;
  subtotal: number;
  shippingFee: number;
  discount: number;
  grandTotal: number;
  loading: boolean; // Brought back for global state!
  setCartData: (data: any) => void; // Brought back to inject data from the page!
  saveShippingAddress: (address: ShippingAddress) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

// 2. Create Context
const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

// 3. Create Provider (No initialData prop needed here anymore)
export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false); 


  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("ecoyaan_address");
      if (saved) setShippingAddress(JSON.parse(saved));
    } catch (e) {
      console.error("Address parse error", e);
    }
  }, []);

  // 2. LOOP FIX: Calculate totals on the fly (Derived State)
  // This is much faster and safer than using 3 separate setStates
  const subtotal = cartItems.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
  const grandTotal = subtotal + shippingFee - discount;

  const saveShippingAddress = (address: ShippingAddress) => {
    setShippingAddress(address);
    localStorage.setItem("ecoyaan_address", JSON.stringify(address));
  };

  const setCartData = (data: any) => {
    // Only update the core "source of truth"
    setCartItems(data.cartItems || []);
    setShippingFee(data.shipping_fee || 0);
    setDiscount(data.discount_applied || 0);
    setLoading(false);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prev => prev.map(item => 
      item.product_id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.product_id !== id));
  };

  // 3. HYDRATION GUARD: Don't render children until client is ready
  if (!isMounted) return null;

  return (
    <CheckoutContext.Provider
      value={{
        cartItems,
        shippingAddress,
        subtotal,
        shippingFee,
        discount,
        grandTotal,
        loading,
        setCartData,
        saveShippingAddress,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

// 4. Custom Hook
export const useCheckoutData = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckoutData must be used within CheckoutProvider");
  }
  return context;
};