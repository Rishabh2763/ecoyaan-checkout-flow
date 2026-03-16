import Link from "next/link";
import { fetchCartData } from "../../../lib/mockData";
import CartItem from "../../../components/cart/CartItem";
import OrderSummary from "../../../components/cart/OrderSummary";
import SavingsBanner from "../../../components/cart/SavingsBanner";
import StoreInitializer from "@/components/cart/StoreIntializer";

export default async function CartPage() {
  // 1. Fetch data on the server (SSR)
  const data = await fetchCartData();

  // 2. Calculate the totals
  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );
  const grandTotal = subtotal + data.shipping_fee - data.discount_applied;

  const contextPayload = {
    cartItems: data.cartItems,
    shipping_fee: data.shipping_fee,
    discount_applied: data.discount_applied
  };

  return (
    <main className="min-h-screen bg-white p-4 md:p-10 text-gray-900 font-sans">
      <StoreInitializer serverData={contextPayload} />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

        {/* Modular Components */}
        <OrderSummary 
          subtotal={subtotal} 
          shippingFee={data.shipping_fee} 
          grandTotal={grandTotal} 
        />

        <SavingsBanner discountApplied={data.discount_applied} />

        {/* Delivery Address Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-lg font-bold">Delivery address:</h2>
            <Link 
              href="/shipping"
              className="border border-[#00875A] text-[#00875A] px-4 py-1.5 rounded text-sm hover:bg-[#E6F4EA] transition-colors"
            >
              Add address
            </Link>
          </div>
          <p className="text-sm text-gray-500">No default address set. Please add an address.</p>
        </div>

        {/* Items List */}
        <div className="bg-[#F8F9FA] px-4 py-3 rounded-t-md border-b flex justify-between items-center">
          <h2 className="font-bold">List of added items</h2>
        </div>
        
        <div className="divide-y border-b border-l border-r rounded-b-md">
          {data.cartItems.map((item) => (
            <CartItem key={item.product_id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}