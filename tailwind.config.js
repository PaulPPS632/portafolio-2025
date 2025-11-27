import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        orbitron: ["var(--font-orbitron)"]
      },
      color: {
        back: "#111111",
        verdeoscuro: "#13403C",
        blancoback: "#E7E8EA",
        texto: "#7AF29888",
        titles: "#7AF298",
        card: "#151515"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
        // back: "#111111",
        // verdeoscuro: "#13403C",
        // blancoback: "#111111",
        // texto: "#13403C",
        // titles: "#7AF298",
        // card: "#F4F8F7"

        // back: "#111111",
        // verdeoscuro: "#13403C",
        // blancoback: "#E7E8EA",
        // texto: "#13403C",
        // titles: "#7AF298",
        // card: "#151515"
