import Link from "next/link";

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
      <Link 
        href="/" 
        className="flex-1 bg-[#00875A] text-white font-bold py-3 text-center rounded-xl hover:bg-[#00734d] transition-all"
      >
        Continue Shopping
      </Link>
      <button 
        onClick={() => window.print()}
        className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all"
      >
        Download Invoice
      </button>
    </div>
  );
}