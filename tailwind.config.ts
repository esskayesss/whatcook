import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "garamond": "var(--font-garamond)",
      "geist": "var(--font-geist)",
    },
    extend: {
      fontSize: {
        "base": "14px"
      },
      colors: {
        "white": "#F7F1EE",
        "black": "#1E1E1E",
        "green": "#697F4D",
        "gray":  "#4F4F4F",
        "blue":  "#3140C4",
        "cream": "#C8B6AC",
        "yellow": "#C39D55",
        "red": "#913B3B"
      },
    },
  },
  plugins: [],
} satisfies Config;
