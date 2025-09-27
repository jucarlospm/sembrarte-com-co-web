// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sembrarte-green": "#6a994e", // Verde principal de tu marca
        "sembrarte-light-green": "#a7c957", // Verde más claro
        "sembrarte-brown": "#4F4032", // Marrón oscuro del logo
        "sembrarte-cream": "#f2e8cf", // Crema/beige de fondo
      },
      fontFamily: {
        // Usaremos 'Nunito' como ejemplo, es redondeada y amigable como tu logo
        sans: ["Nunito", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
