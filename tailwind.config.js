/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Incon: ["Inconsolata", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "360px", // For small screens like phones
        md: "768px", // For medium screens like tablets
        lg: "1024px", // For large screens like laptops
        xl: "1280px", // For extra-large screens like desktops
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
