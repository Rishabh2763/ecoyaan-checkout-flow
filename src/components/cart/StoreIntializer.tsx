"use client";
import { useEffect, useRef } from "react";
import { useCheckoutData } from "../../context/CheckoutContext";

export default function StoreInitializer({ serverData }: { serverData: any }) {
  const { setCartData } = useCheckoutData();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      setCartData(serverData); // Hydrate the context with your SSR data!
      initialized.current = true;
    }
  }, [serverData, setCartData]);

  return null; // This component doesn't render any UI
}