/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'active': '#3B3B3B',
        'inactive': '#F0F4F8',
        'gray-medium': '#3B3B3B',
      }
    },
  },
  plugins: [],
}

