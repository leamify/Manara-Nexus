import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": {
          DEFAULT: "#0A111F",
          dark: "#060B14",
          surface: "#0E182D",
          light: "#14233F",
        },
        "brand-gold": {
          DEFAULT: "#C5A059",
          hover: "#B38F48",
          light: "#DFC38A",
          muted: "rgba(197, 160, 89, 0.15)",
        },
        "brand-gray-light": "#F8F9FA",
        "brand-gray-muted": "#8A9A9A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.12) 0%, transparent 60%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
