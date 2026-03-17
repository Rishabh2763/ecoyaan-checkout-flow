export default function OrderHeader({ orderId }: { orderId: number }) {
  return (
    <>
      <div className="w-20 h-20 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6 animate-bounce">
        <svg className="w-10 h-10 text-[#00875A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Your order <span className="font-mono font-bold text-gray-800">#ECO-{orderId}</span> has been placed.
      </p>
    </>
  );
}