  import { fetchCartData } from "../../../lib/mockData";
  import StoreInitializer from "../../../components/cart/StoreIntializer";
  import CartContent from "../../../components/cart/CartContent"; 

  export default async function CartPage() {
    // 1. Fetch data on the server (SSR)
    const data = await fetchCartData();

    // 2. Prepare payload for the Context Initializer
    const contextPayload = {
      cartItems: data.cartItems,
      shipping_fee: data.shipping_fee,
      discount_applied: data.discount_applied
    };

    return (
      <main className="min-h-screen bg-white p-4 md:p-10 text-gray-900 font-sans">
        
        {/* This hydrates our global context on the client */}
        <StoreInitializer serverData={contextPayload} />
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-gray-900 tracking-tight">Your Cart</h1>

          {/* This is the Client Component that listens to the Context! */}
          <CartContent />
        </div>
        
      </main>
    );
  }