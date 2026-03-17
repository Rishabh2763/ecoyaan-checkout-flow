import { ShippingAddress } from "../../context/CheckoutContext"; // Adjust import path

export default function DeliveryCard({ shippingAddress }: { shippingAddress: ShippingAddress | null }) {
  // Fallback in case the user refreshes and context is lost
  if (!shippingAddress) return null; 

  return (
    <div className="w-full max-w-md bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 text-left">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm">🚚</div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Estimated Delivery</p>
          <p className="text-sm font-semibold text-gray-800">Thursday, 19th March — 21st March</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Shipping To</p>
        <p className="text-sm text-gray-700">
          {shippingAddress.fullName}, {shippingAddress.city}
        </p>
      </div>
    </div>
  );
}