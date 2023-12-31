/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'itemcolor': '#2d1338',
        'btncolor': '#e57cd8',
        'sec-btncolor': '#fac5c3'
      }
    },
  },
  plugins: [],
}