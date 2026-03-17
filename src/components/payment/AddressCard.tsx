import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShippingAddress } from "../../context/CheckoutContext"; 

export default function AddressCard({ address }: { address: ShippingAddress | null }) {
  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4 cursor-pointer">
        <div className="flex items-center gap-2">
          {/* SVG Icon */}
          <h2 className="text-base font-bold text-gray-900">Delivering to</h2>
        </div>
      </div>
      
      {address ? (
        <div className="mt-4">
          <div className="flex justify-between items-start mb-2">
            <p className="text-lg font-bold text-[#00875A]">{address.fullName}</p>
            <button onClick={() => router.push("/shipping")} className="px-4 py-1.5 text-sm font-medium text-[#00875A] bg-white border border-[#00875A] rounded-full hover:bg-[#E6F4EA]">
              Change
            </button>
          </div>
          <div className="text-sm text-gray-600 leading-relaxed max-w-[85%] space-y-1">
            <p className="text-gray-800 font-medium">{address.address}</p>
            <p>{address.city}, {address.state} - {address.pinCode}</p>
            <p className="text-gray-500">{address.email}</p>
            <p className="mt-3 text-gray-800"><span className="font-semibold text-gray-900">Phone:</span> {address.phone}</p>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Link href="/shipping" className="inline-flex items-center gap-2 bg-[#00875A] hover:bg-[#00734d] text-white px-5 py-2.5 rounded-full text-sm font-medium">
            <span>+</span> Add New Address
          </Link>
        </div>
      )}
    </div>
  );
}