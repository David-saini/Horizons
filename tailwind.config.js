/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: "kanit",
        jost: "Jost",
      },
      fontSize: {
        // xs: "16px",textbase
        // sm: "18px",text-lg
        // md: "20px",text-xl
        // lg: "24px",text-2xl
        xxl: "48px",
        xxxl: "64px"
      },
      colors: {
        lightgreen: "#359f35",
        gray1: "#666b66",
        white1: "#FCFEFC",
        dark: "#000700",
        grey2: "#4d524d",
      },
    },
  },
  plugins: [],
}