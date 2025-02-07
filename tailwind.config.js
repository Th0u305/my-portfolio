/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/components/card.js",
  ],

  theme: {
    extend: {},
  },
  plugins: [heroui()],
}