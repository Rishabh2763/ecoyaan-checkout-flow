# Ecoyaan Checkout Flow - Take-Home Assignment

A functional, high-performance 3-step checkout process built with **Next.js 14**, featuring Server-Side Rendering (SSR), global state management, and localized data persistence.

## 🔗 Project Links
- **Live Demo:** [Insert your Vercel URL here]
- **Repository:** [Insert your GitHub Repo URL here]

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 🚀 Architectural Choices & Highlights

### 1. Server-Side Rendering (SSR)
To satisfy the technical requirements, the **Cart Page** utilizes Next.js Server Components.
- Initial cart data is fetched on the server using `async/await`.
- This ensures the page is pre-rendered with data, improving performance and eliminating the "loading flicker" common in client-side applications.

### 2. State Management & Hydration
I implemented a **Hybrid Pattern** to synchronize Server-Side fetched data with the Client-Side Context:
- **Context API:** Used to maintain cart items and shipping details across the multi-step flow.
- **StoreInitializer Pattern:** A custom hydration bridge that injects server-fetched data into the global context once the client-side app mounts, preventing UI mismatches and hydration errors.

### 3. Data Persistence & UX
- **Form Validation:** The Shipping Address form includes robust validation for 10-digit phone numbers and valid email formats using native browser APIs and state logic.
- **LocalStorage Integration:** Used **Lazy State Initialization** to persist shipping details safely in the browser. This ensures data remains available after page refreshes without triggering SSR mismatch warnings.
- **Responsive Design:** Followed Ecoyaan's brand aesthetics with a mobile-first, clean, and green-themed UI using Tailwind CSS.

## 📦 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/ecoyaan-checkout-flow.git](https://github.com/YOUR_USERNAME/ecoyaan-checkout-flow.git)


   Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open the app:
Visit http://localhost:3000 to view the flow.

📁 Folder Structure
src/app: App Router pages and API routes.

src/context: Global state management logic.

src/components: Reusable UI components (Cart, Shipping, Success).

src/lib: Mock data helpers and types.

---

### One Last Step: The Submission Email
Since you are ready to wrap this up, here is a professional message you can send to the founder or recruiter:

**Subject:** Submission: Take-Home Assignment - Checkout Flow - [Your Name]

**Hi [Founder/Recruiter Name],**

I’ve completed the checkout flow assignment. It was a great exercise in balancing Next.js Server Components with client-side state management.

**Key features of my implementation:**
* **SSR Integration:** Used Server Components for the initial cart fetch to ensure fast load times and SEO.
* **State Management:** Used Context API with a hydration strategy to bridge server data to the client.
* **Clean UI:** A fully responsive design using Tailwind CSS, optimized for both desktop and mobile.

**Links:**
* **GitHub Repo:** [Insert Link]
* **Live Deployment:** [Insert Link]

I look forward to discussing the architectural choices further with you!

Best regards,
[Your Name]