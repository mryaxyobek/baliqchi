/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111',
      },
    },
    screens:{
      1130:'1130px',
      950:'950px',
      550:'550px',
    }
  },
  plugins: [],
}