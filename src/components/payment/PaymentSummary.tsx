import { CartItem } from "../../context/CheckoutContext"; 

export default function PaymentSummary({ 
  cartItems, subtotal, shippingFee, discount, paymentMethod, finalPayable 
}: {
  cartItems: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  paymentMethod: string;
  finalPayable: number;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
      <h2 className="text-xl font-bold mb-6">Order Summary ({cartItems.length} items)</h2>
      
      <div className="max-h-[300px] overflow-y-auto pr-2 mb-4">
        {cartItems.map((item) => (
          <div key={item.product_id} className="flex gap-4 mb-4 pb-4 border-b last:border-0 last:pb-0 last:mb-0">
            {/* 1. UI FIX: Safe image wrapper so broken alt text doesn't ruin the layout */}
            <div className="w-16 h-16 shrink-0 bg-gray-50 border rounded flex items-center justify-center overflow-hidden">
              <img 
                src={item.image} 
                alt={item.product_name} 
                className="w-full h-full object-cover text-[10px] text-gray-400 text-center px-1" 
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{item.product_name}</h3>
              <p className="text-xs text-gray-500 mt-1">₹{item.product_price} x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. UI FIX: Professional SVG icon for Coupons */}
      <div className="flex justify-between items-center p-3 border rounded-md mb-6 hover:bg-gray-50 cursor-pointer transition-colors">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span className="text-sm font-medium text-gray-800">Offers & Coupons</span>
        </div>
        <span className="text-gray-400">&gt;</span>
      </div>

      {/* 3. Re-inserted the Math Rows! */}
      <div className="space-y-3 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-900">
            {shippingFee === 0 ? <span className="text-[#00875A]">FREE</span> : `₹${shippingFee}`}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-[#00875A]">
            <span>Discount</span>
            <span className="font-medium">-₹{discount}</span>
          </div>
        )}
        {paymentMethod === "cod" && (
          <div className="flex justify-between">
            <span className="text-gray-600">COD Fee</span>
            <span className="font-medium text-gray-900">₹49</span>
          </div>
        )}
      </div>

      <p className="text-[#3b82f6] text-xs font-medium cursor-pointer mb-4 hover:underline">
        Own a business? Enter your GSTIN!
      </p>
      
      <hr className="my-4" />
      
      {/* 4. UI FIX: items-center ensures perfect horizontal alignment */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">You Pay</span>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">₹{finalPayable}</div>
          <div className="text-[11px] text-gray-500 font-medium mt-0.5">Including all taxes</div>
        </div>
      </div>
    </div>
  );
}