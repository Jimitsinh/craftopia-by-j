/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        craft: {
          cream: '#FDFBF7',
          terracotta: '#C4654A',
          green: '#0A3B2C',
          lightBrown: '#D4A373', // For hover states
          darkBrown: '#A65A41'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
