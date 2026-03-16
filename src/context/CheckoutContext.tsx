"use client";

import React, { createContext, useContext, useState } from "react";

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
  loading: boolean;
  saveShippingAddress: (address: ShippingAddress) => void;
  setCartData: (data: any) => void; 
}

// 2. Helper for Lazy Initialization (Fixes the ESLint warning!)
const getSavedAddress = (): ShippingAddress | null => {
  // Ensure we are in the browser before accessing localStorage
  if (typeof window === "undefined") return null;
  
  try {
    const saved = localStorage.getItem("ecoyaan_address");
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Failed to parse saved address", error);
    return null;
  }
};

// 3. Create Context
const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

// 4. Create Provider
export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  // Pass the helper function directly to useState. 
  // This runs ONCE on the very first render, grabbing the address immediately.
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(getSavedAddress);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  
  // Start in a loading state. We will set this to false once setCartData runs.
  const [loading, setLoading] = useState(true);

  // Function to receive SSR data from the CartPage and update the state
  const setCartData = (data: any) => {
    setCartItems(data.cartItems);
    setShippingFee(data.shipping_fee);
    setDiscount(data.discount_applied);

    const calculatedSubtotal = data.cartItems.reduce(
      (acc: number, item: CartItem) => acc + item.product_price * item.quantity, 
      0
    );
    
    setSubtotal(calculatedSubtotal);
    setGrandTotal(calculatedSubtotal + data.shipping_fee - data.discount_applied);
    
    // Data is fully hydrated, remove the loading state
    setLoading(false); 
  };

  // Function to save address to both State and LocalStorage
  const saveShippingAddress = (address: ShippingAddress) => {
    setShippingAddress(address);
    if (typeof window !== "undefined") {
      localStorage.setItem("ecoyaan_address", JSON.stringify(address));
    }
  };

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
        saveShippingAddress,
        setCartData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

// 5. Custom Hook
export const useCheckoutData = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckoutData must be used within CheckoutProvider");
  }
  return context;
};