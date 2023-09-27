/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

