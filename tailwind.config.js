/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Corrected here
        primary: "#1774E4",
        secondary: "#FEC842",
      },
    },
  },
  plugins: [],
}
