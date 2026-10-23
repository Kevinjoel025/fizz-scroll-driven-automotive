# McLaren 720S — Scroll-Driven Automotive Animation

A high-performance, scroll-driven interactive hero section built with **React 19**, **Vite**, **GSAP (ScrollTrigger)**, and **Tailwind CSS v4**.

🔗 **Live Demo:** [https://kevinjoel025.github.io/fizz-scroll-driven-automotive/](https://kevinjoel025.github.io/fizz-scroll-driven-automotive/)  
📦 **Repository:** [https://github.com/Kevinjoel025/fizz-scroll-driven-automotive](https://github.com/Kevinjoel025/fizz-scroll-driven-automotive)

---

## 🚀 Features

- **Hero Section Layout:**
  - Fullscreen above-the-fold layout (`100svh`) with an atmospheric dynamic dark background and perspective grid.
  - Prominent letter-spaced headline (`W E L C O M E I T Z F I Z Z`) styled with the geometric `Syncopate` typeface.
  - Symmetrically aligned impact metrics / performance statistics (`58%`, `23%`, `27%`, `40%`) with dedicated divider lines and labels.

- **Initial Load Entrance Animation:**
  - GSAP timeline with `power3.out` deceleration.
  - Staggered entrance for eyebrow text, primary headline, top-down supercar graphic, metrics cards, and scroll indicator.

- **Scroll-Driven Animation (Core Interaction):**
  - Scrubbed timeline linked directly to scroll progress via `ScrollTrigger.scrub`.
  - Pinned hero stage that transforms the vehicle along the X/Y axes while applying smooth rotational yaw and scaling.
  - Transition into a detailed performance breakdown panel as the hero copy smoothly fades and scales out.

- **Performance & Smoothness Optimization:**
  - GPU-accelerated motion using CSS transforms (`translate3d`, `rotate`, `scale`) and `will-change` properties.
  - Zero layout reflow or continuous DOM recalculations during scroll.
  - Automatic `ScrollTrigger.refresh()` triggered on web font ready and image load events.
  - Full React StrictMode cleanup using `gsap.context()`.

- **Responsive & Accessible Design:**
  - Adaptive motion vectors for desktop (`>= 768px`) and mobile (`< 768px`) viewports via `gsap.matchMedia()`.
  - Accessible to users with `prefers-reduced-motion: reduce`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 + Vanilla CSS Modules
- **Animation Engine:** GSAP 3.15 + ScrollTrigger Plugin
- **Deployment:** GitHub Pages via GitHub Actions

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kevinjoel025/fizz-scroll-driven-automotive.git
   cd fizz-scroll-driven-automotive
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or npm run dev
   ```

4. **Build for production:**
   ```bash
   pnpm build
   ```
