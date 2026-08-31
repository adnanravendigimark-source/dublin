import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Irish Coastal Adventure Palette
        irish: {
          forest: "#075E4A",  // Irish Forest Green ⭐ (Primary brand, CTAs, buttons)
          emerald: "#0D4F43", // Deep Emerald (Headings, footer, dark sections)
          cream: "#F8F5EC",   // Warm Cream ⭐ (Main background)
          mist: "#DDEBE8",    // Atlantic Mist (Light sections, cards)
          gold: "#D9A441",    // Irish Gold (Highlights, icons, accents)
          sage: "#C9D9CC",    // Soft Sage (Secondary UI/backgrounds)
          navy: "#102A43",    // Deep Navy (Main text)
          white: "#FFFFFF",   // White
        },
        stone: {
          50: "#F8F5EC",   // Warm Cream
          100: "#DDEBE8",  // Atlantic Mist
          200: "#C9D9CC",  // Soft Sage
          800: "#102A43",  // Deep Navy
          900: "#102A43",  // Deep Navy
        },
        gold: {
          400: "#E5BA5D",
          500: "#D9A441",  // Irish Gold ⭐
          600: "#B88424",
        },
        emerald: {
          900: "#0D4F43",  // Deep Emerald ⭐
          800: "#075E4A",  // Irish Forest Green ⭐
          700: "#0A755C",
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "rgb(var(--color-maya-ivory) / <alpha-value>)",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#DDEBE8",
          sage: "#C9D9CC",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#0D4F43",
        },
        // Compatibility aliases for site components
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#075E4A",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#F8F5EC",
          sky: "#DDEBE8",
          sand: "#C9D9CC",
        },
        navy: {
          900: "#0D4F43",
          800: "#075E4A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "ui-serif", "serif"],
        script: ["var(--font-script)", "Alex Brush", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 20% 20%, rgba(217,164,65,0.15) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(7,94,74,0.25) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(13,79,67,0.25) 0, transparent 45%)",
      },
    },
  },
  plugins: [],
};
export default config;

