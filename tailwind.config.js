/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spinc': ['SPINC___', 'sans-serif'],
        'gothic': ['URWGothic', 'sans-serif'],
        'future': ['BlackFuture', 'sans-serif']
      },
      colors: {
        accent: {
          DEFAULT: '#6A0DAD',
          dark: '#FFFF'
        }
      }
    },
  },
  plugins: [],
}

