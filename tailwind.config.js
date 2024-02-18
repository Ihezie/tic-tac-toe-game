/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "powder-blue": "#A8BEC9ff",
        gunmetal: "#1F3540ff",
        "gunmetal-2": "#192A32ff",
        "rich-black": "#0E202Aff",
        xanthous: "#F2B237ff",
        "robin-egg-blue": "#31C4BEff",
        brown: "#A52A2A",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};