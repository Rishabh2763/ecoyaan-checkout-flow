# Ecoyaan Checkout Flow

An attempt at a functional, responsive 3-step checkout process built with **Next.js 16**, exploring Server-Side Rendering (SSR), global state management, and localized data persistence.

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

## 🚀 Architectural Approach & Learnings

### 1. Server-Side Rendering (SSR)
To satisfy the technical requirements, I chose to utilize Next.js Server Components for the **Cart Page**.
- My goal was to fetch initial cart data on the server using `async/await`.
- I aimed to pre-render the page with data to help improve perceived performance and reduce client-side loading flickers.

### 2. Layout Architecture & Responsive UI
To try and minimize distractions during the payment flow, I experimented with distinct layout strategies:
- **Storefront Layout:** Features a full navigation bar to encourage exploration. On mobile devices, I used Tailwind's `flex-wrap` and `order` utilities with the intention of reorganizing the Navbar cleanly and preventing overlapping elements.
- **Checkout Layout:** Implements a simplified, distraction-free header. Once the user enters the checkout flow, extraneous links are removed to help focus the user entirely on conversion.

### 3. State Management: Hydration & "Derived Totals"
I used the Context API and attempted to synchronize Server-Side fetched data with the Client-Side Context:
- **StoreInitializer Pattern:** I explored using a hydration bridge to inject server-fetched data into the global context upon mounting, hoping to avoid UI mismatches and hydration errors.
- **Derived State:** To avoid infinite re-render loops (like the "Maximum update depth exceeded" error I encountered during development), I derived cart totals directly from the `cartItems` array during the render cycle rather than storing them in separate `useState` hooks.

### 4. Form Management: React Hook Form
For the shipping and checkout forms, I decided to use React Hook Form:
- **Avoiding Bloat:** I tried to rely on React Hook Form's native `register` API for validations (like regex for phone numbers and PIN codes) instead of adding external schema libraries like Zod, aiming to keep the bundle size relatively small.
- **Modularity:** I abstracted the form inputs into a `<InputField />` component to help standardize error states, styling, and accessibility across the app.

### 5. Asset Optimization & Core Web Vitals
I tried to balance visual fidelity with load times:
- **Local Modern Formats:** I hosted `.webp` assets locally in the `public/` directory rather than hotlinking. This seemed to bypass domain whitelisting issues and helped avoid gateway timeout errors I was seeing earlier.
- **Next/Image:** I used the Next.js `<Image />` component, experimenting with `fill`, `object-cover`, and `priority` properties on hero sections to aim for responsive imagery without layout shifts.

### 6. Data Persistence & Post-Purchase UX
- **LocalStorage Integration:** I explored Lazy State Initialization to persist shipping details in the browser, trying to keep data available after page refreshes without triggering SSR mismatch warnings.
- **Post-Purchase Cleanup:** I added a `useEffect` to clear the cart state upon reaching the Success Page to prevent "ghost items" from lingering, while attempting to preserve the shipping address for the user's future convenience.

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




