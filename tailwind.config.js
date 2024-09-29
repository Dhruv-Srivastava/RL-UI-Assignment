/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#121214",
          800: "#202024",
          700: "#29292E",
          600: "#323238",
          500: "#7C7C8A",
          400: "#8D8D99",
          300: "#C4C4CC",
          200: "#E1E1E6",
        },
      },
    },
  },
  plugins: [],
};
