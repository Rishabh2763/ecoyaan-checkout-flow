"use client";

import { useState , useEffect} from "react";
import { useRouter } from "next/navigation";
import { useCheckoutData } from "../../../context/CheckoutContext"; 

import AddressCard from "../../../components/payment/AddressCard";
import PaymentSelector from "../../../components/payment/PaymentSelector";
import PaymentSummary from "../../../components/payment/PaymentSummary";

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

  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace("/cart");
    }
  }, [cartItems.length, router]);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-6">
          <AddressCard address={shippingAddress} />
          
          <PaymentSelector 
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            grandTotal={grandTotal}
            discount={discount}
            finalPayable={finalPayable}
            onPay={handlePayment}
            isAddressReady={!!shippingAddress}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5">
          <PaymentSummary 
            cartItems={cartItems}
            subtotal={subtotal}
            shippingFee={shippingFee}
            discount={discount}
            paymentMethod={paymentMethod}
            finalPayable={finalPayable}
          />
        </div>

      </div>
    </main>
  );
}