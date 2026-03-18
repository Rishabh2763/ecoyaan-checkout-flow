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

## 🚀 How It Works & Lessons Learned

### 1. Fast Initial Page Load (Server-Side Rendering)
To make the app feel as fast as possible, I used Next.js to fetch the cart data *before* the page is sent to the browser. 
- Instead of showing the user a blank screen or a loading spinner, the Cart Page loads instantly with their items already there.

### 2. Clean Layouts & Mobile Design
I wanted to make sure the checkout process was distraction-free and looked great on phones:
- **Storefront:** I built a full menu so users can easily browse. On mobile devices, the menu automatically reorganizes itself so buttons don't overlap.
- **Checkout View:** Once the user clicks "Checkout", I intentionally hide the main navigation links. This removes distractions and helps them focus entirely on finishing their purchase.

### 3. Managing Cart Data Safely
Keeping track of the cart data across the app required a careful approach:
- **Connecting Server & Browser:** Since the initial data loads on the server, I built a small helper component to safely pass that data into the interactive parts of the app without causing React errors.
- **Calculating Totals on the Fly:** Initially, trying to update the cart quantities and the totals at the same time caused the app to crash (infinite loops). I fixed this by having the app calculate the subtotal dynamically from the cart items, rather than saving the totals as separate state variables.

### 4. Handling Forms Efficiently 
For the shipping and checkout forms, I used React Hook Form:
- **Keeping the App Fast:** I used the library's built-in tools to check for valid phone numbers and PIN codes. This allowed me to avoid downloading heavy external validation libraries, keeping the website lightweight.
- **Reusable Inputs:** I built a single, standard text input component that handles styling and error messages automatically, which kept the code clean and organized.

### 5. Smooth Image Loading
High-quality product images can slow down a website, so I focused on performance:
- **Local Images:** I saved compressed `.webp` images directly in the project files instead of linking to external websites. This prevented the images from occasionally failing or timing out.
- **No Page Jumping:** I used the Next.js `<Image />` component to ensure the images fit the screen nicely and don't make the text jump around as they load in.

### 6. Saving User Progress
I wanted to make sure the user had a forgiving and smooth experience:
- **Remembering Details:** I save the user's shipping details in their browser. If they accidentally refresh the page mid-checkout, their typing isn't lost.
- **Clearing the Cart:** Once an order is successful, the app automatically empties the cart so old items don't show up later, but it intentionally remembers their address for their next visit.

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




