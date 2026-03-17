export default function PaymentSelector({ 
  paymentMethod, 
  setPaymentMethod, 
  grandTotal, 
  discount, 
  finalPayable, 
  onPay, 
  isAddressReady 
}: { 
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  grandTotal: number;
  discount: number;
  finalPayable: number;
  onPay: () => void;
  isAddressReady: boolean;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-lg font-bold mb-4">Payment Method</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Pay Online Option */}
        <label className={`relative flex flex-col p-4 border rounded-lg cursor-pointer ${paymentMethod === "online" ? "border-[#00875A] bg-[#f0fdf4]" : "border-gray-200"}`}>
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">Pay Online 🔥</span>
            </div>
            <input type="radio" value="online" checked={paymentMethod === "online"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 text-[#00875A]" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[#00875A] font-bold">₹{grandTotal}</span>
          </div>
        </label>

        {/* COD Option */}
        <label className={`relative flex flex-col p-4 border rounded-lg cursor-pointer ${paymentMethod === "cod" ? "border-[#00875A] bg-[#f0fdf4]" : "border-gray-200"}`}>
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-gray-700">Cash on Delivery</span>
            </div>
            <input type="radio" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 text-[#00875A]" />
          </div>
          <div className="mt-4">
            <span className="font-bold text-gray-900">₹{grandTotal + 49}</span>
          </div>
        </label>
      </div>

      <button 
        onClick={onPay}
        disabled={!isAddressReady}
        className={`w-full font-semibold py-3 rounded-md transition-colors ${isAddressReady ? "bg-[#00875A] hover:bg-[#00734d] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
      >
        Proceed to Pay (₹{finalPayable})
      </button>
    </div>
  );
}