import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // <-- PRIDĖKITE ŠIĄ EILUTĘ
  theme: {
    extend: {
      fontFamily: {
        // Jei naudojate pasirinktinį šriftą iš layout.tsx
        // sans: ['var(--font-inter)'], 
      },
    },
  },
  plugins: [],
};
export default config;