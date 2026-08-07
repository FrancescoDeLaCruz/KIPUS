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
        // KIPU Finance Palette
        background: "#0a0a0c", // Deep dark background
        card: "#121217",       // Slightly lighter dark for cards
        primary: {
          blue: "#00d4ff",
          green: "#00ff9d",
          turquoise: "#40e0d0",
          purple: "#9d4edd",
          yellow: "#fca311",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
