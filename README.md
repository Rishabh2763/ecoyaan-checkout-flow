# Ecoyaan Checkout Flow - Take-Home Assignment

A functional, high-performance 3-step checkout process built with **Next.js 14**, featuring Server-Side Rendering (SSR), global state management, localized data persistence, and a highly responsive UI.

## 🔗 Project Links
- **Live Demo:** [Live Link](https://ecoyaan-checkout-flow-zeta.vercel.app/)
- **Repository:** [Link](https://github.com/Rishabh2763/ecoyaan-checkout-flow.git)

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** React Context API
- **Forms & Validation:** React Hook Form
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 🚀 Architectural Choices & Highlights

### 1. Server-Side Rendering (SSR)
To satisfy the technical requirements, the **Cart Page** utilizes Next.js Server Components.
- Initial cart data is fetched on the server using `async/await`.
- This ensures the page is pre-rendered with data, improving performance and eliminating the "loading flicker" common in client-side applications.

### 2. Layout Architecture & Responsive UI
A critical e-commerce best practice is minimizing distractions during the payment flow. To achieve this, the application utilizes distinct layout strategies:
- **Storefront Layout:** Features a full, responsive navigation bar (Logo, Search, Profile, Wishlist, Cart) to encourage exploration. On mobile devices, the Navbar intelligently reorganizes itself using Tailwind's `flex-wrap` and `order` utilities, dropping the Search Bar to a dedicated row to prevent overlapping.
- **Checkout Layout:** Implements an isolated, distraction-free header. Once the user enters the cart/shipping flow, extraneous links are removed to focus the user entirely on conversion.

### 3. State Management: Hydration & "Derived Totals"
I implemented a robust Context API pattern to synchronize Server-Side fetched data with the Client-Side Context:
- **StoreInitializer Pattern:** A custom hydration bridge that injects server-fetched data into the global context once the client-side app mounts, preventing UI mismatches and hydration errors.
- **Derived State:** To prevent infinite re-render loops (Maximum update depth exceeded), cart totals (subtotal, shipping, discounts) are not stored in multiple individual `useState` hooks. Instead, they are calculated dynamically during the render cycle derived directly from the `cartItems` array, ensuring the UI is always perfectly in sync.

### 4. Form Management: React Hook Form
For the complex shipping and checkout forms, I opted for a lightweight, highly performant approach:
- **Avoiding Bloat:** Instead of bringing in heavy external schema validation libraries like Zod, I utilized **React Hook Form's** native `register` API. This handled complex validations (like 10-digit phone numbers and PIN codes via Regex) perfectly while keeping the bundle size small.
- **Modularity:** Abstracted form inputs into a highly reusable `<InputField />` component that standardizes error states, styling, and accessibility across the app.

### 5. Asset Optimization & Core Web Vitals
Managing product and hero images requires balancing visual fidelity with load times (LCP).
- **Local Modern Formats:** Transitioned from hotlinking external image URLs to hosting highly compressed `.webp` assets locally in the `public/` directory. This bypassed restrictive `next.config.js` domain whitelisting and completely eliminated `504 Gateway Timeout` errors.
- **Next/Image:** Leveraged the Next.js `<Image />` component with absolute paths. For hero sections, `fill`, `object-cover`, and `priority` properties were heavily utilized to create responsive, full-bleed imagery without layout shift.

### 6. Data Persistence & Post-Purchase UX
- **LocalStorage Integration:** Used Lazy State Initialization to persist shipping details safely in the browser. This ensures data remains available after page refreshes without triggering SSR mismatch warnings.
- **Post-Purchase Cleanup:** Automatically clears the global cart state within an empty-dependency `useEffect` upon reaching the Success Page. This prevents "ghost items" if the user navigates back to the store, while intentionally preserving their shipping address for future convenience.

## 📦 How to Run Locally

1. **Clone the repository:**
   ```
   git clone [https://github.com/Rishabh2763/ecoyaan-checkout-flow.git](https://github.com/Rishabh2763/ecoyaan-checkout-flow.git)
   ```

2. **Install dependencies:**
    ``` 
    npm install
    ```

3. **Run the development server:**

    ```
    npm run dev
    ```

4. **Open The App:**

    Visit ```http://localhost:3000``` to view the flow.




