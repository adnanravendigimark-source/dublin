import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chichen Itza official requested color palette
        stone: {
          50: "#F8F5EC",   // Mayan Ivory
          100: "#F2EDE1",
          200: "#E7D9BF",  // Warm Sand
          800: "#34453E",
          900: "#26332D",  // Stone Charcoal
        },
        gold: {
          400: "#D9A441",
          500: "#C58A2B",  // Mayan Gold ⭐
          600: "#A87220",
        },
        emerald: {
          900: "#073B2A",  // Mayan Forest Green ⭐
          800: "#0F4D37",
          700: "#145A43",  // Jungle Green
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "rgb(var(--color-maya-ivory) / <alpha-value>)",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#E7D9BF",
          sage: "#DCE7DC",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-forest) / <alpha-value>)",
          dark: "#073B2A",
        },
        // Compatibility aliases for site components
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#145A43",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#F8F5EC",
          sky: "#DCE7DC",
          sand: "#E7D9BF",
        },
        navy: {
          900: "#073B2A",
          800: "#145A43",
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
