/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color': '#f5ebe0',
        'main-color': '#d6ccc2'
      }
    },
  },
  plugins: [],
}