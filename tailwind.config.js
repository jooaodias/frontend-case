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
        'medium-gray': '#3B3B3B',
        'light-gray': "#6B7076",
        'border-color': '#DEE4E9',

        'blue-primary': '#1A93DA',
        'main': '#fe3e6d',
        'dark-main': '#d4265a',
        'white': '#ffffff',
        'gray': '#6b7076',
        'lighter-gray': '#f0f4f8',
        'error': '#ee3636',
        'success': '#04aa6d',
        
      }
    },
  },
  plugins: [],
}