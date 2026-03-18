"use client";
import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCheckoutData } from "@/context/CheckoutContext";
import InputField from "@/components/shipping/InputField";

interface ShippingFormValues {
  fullName: string;
  email: string;
  phone: string;
  address: string; 
  pinCode: string;
  city: string;
  state: string;
}

export default function ShippingPage() {
  const router = useRouter();
  const { saveShippingAddress, shippingAddress } = useCheckoutData(); 

  // 1. We added 'watch' to grab the live keystrokes
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<ShippingFormValues>({
    mode: "onTouched",
    defaultValues: shippingAddress || {},
  });

  // 2. This variable now updates every time the user types a single letter
  const formData = watch(); 

  // 3. THE DEBOUNCE EFFECT (Auto-Save)
  useEffect(() => {
    // Start a 500ms stopwatch
    const timeoutId = setTimeout(() => {
      // If the form isn't completely empty, save it directly to the "hard drive"
      if (Object.keys(formData).length > 0) {
        localStorage.setItem("ecoyaan_address", JSON.stringify(formData));
      }
    }, 500);

    // CLEANUP: If the user types another letter before 500ms is up,
    // React destroys the old stopwatch and starts a new one!
    return () => clearTimeout(timeoutId);
  }, [formData]); // <-- Watch list checks for new keystrokes

  // 4. Initial Hydration (Populates form on first load)
  useEffect(() => {
    if (shippingAddress) {
      reset(shippingAddress);
    }
  }, [shippingAddress, reset]);

  const onSubmit = (data: ShippingFormValues) => {
    // When they click the button, we formally update the global Context state
    saveShippingAddress(data); 
    router.push("/confirm-payment");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-10 text-gray-900 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Delivery Address</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField 
            label="Full Name" 
            placeholder="e.g. Jane Doe" 
            registration={register("fullName", { required: "Full Name is required" })}
            error={errors.fullName?.message}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField 
              label="Email Address" 
              type="email"
              placeholder="jane@example.com" 
              registration={register("email", { 
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
              })}
              error={errors.email?.message}
            />
            <InputField 
              label="Phone Number" 
              placeholder="10-digit mobile number" 
              registration={register("phone", { 
                required: "Phone is required",
                pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" }
              })}
              error={errors.phone?.message}
            />
          </div>

          <InputField 
            label="Flat, House no., Building..." 
            placeholder="e.g. Flat 4B, Green Apartments..." 
            isTextArea
            registration={register("address", { required: "Street address is required" })}
            error={errors.address?.message}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <InputField 
              label="PIN Code" 
              placeholder="6 digits" 
              registration={register("pinCode", { 
                required: "Required",
                pattern: { value: /^[0-9]{6}$/, message: "Invalid PIN" }
              })}
              error={errors.pinCode?.message}
            />
            <InputField 
              label="City" 
              placeholder="e.g. Chennai" 
              registration={register("city", { required: "Required" })}
              error={errors.city?.message}
            />
            <InputField 
              label="State" 
              placeholder="e.g. Tamil Nadu" 
              registration={register("state", { required: "Required" })}
              error={errors.state?.message}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#00875A] hover:bg-[#00734d] text-white font-semibold py-3 px-4 rounded-md transition-all active:scale-[0.98]"
            >
              Save Address & Continue
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}