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
        customLightBlue: '#15D1FF', // Approximation of color(display-p3 0.380 0.808 0.980)
        customBlue: '#3F7EFF', 
      },
    },
  },
  plugins: [],
}
