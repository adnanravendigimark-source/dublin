import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Day Trips from Dublin — Emerald/Gold Irish palette. Class names
        // below (stone/gold/emerald/maya/chichen/navy) are unchanged from
        // the Chichen Itza repo this project was cloned from — renaming
        // those identifiers is a purely cosmetic, zero-visual-effect
        // change across 50+ files, so only the color VALUES were updated.
        stone: {
          50: "#FAFAF6",   // Warm Ivory
          100: "#F2F0E8",
          200: "#E4E0D0",  // Warm Sand
          800: "#26332D",
          900: "#1B2B26",  // Charcoal Green
        },
        gold: {
          400: "#D9B53D",
          500: "#C9A227",  // Celtic Gold ⭐
          600: "#A8841C",
        },
        emerald: {
          900: "#0B2E23",  // Deep Forest ⭐
          800: "#0F7A4A",  // Emerald Green
          700: "#1B7A5A",  // Shamrock
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "rgb(var(--color-maya-ivory) / <alpha-value>)",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#E4E0D0",
          sage: "#DCEAE3",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#0B2E23",
        },
        // Compatibility aliases for site components
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#1B7A5A",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#FAFAF6",
          sky: "#DCEAE3",
          sand: "#E4E0D0",
        },
        navy: {
          900: "#0B2E23",
          800: "#1B7A5A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "ui-serif", "serif"],
        script: ["var(--font-script)", "Alex Brush", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 20% 20%, rgba(197,138,43,0.15) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(7,59,42,0.25) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(20,90,67,0.25) 0, transparent 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
