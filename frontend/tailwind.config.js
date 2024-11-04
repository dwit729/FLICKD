/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': colors.white,
      'black': colors.black,
      'gray': colors.gray,
      'red': colors.red,
      'background': '14181c',
      'primary_accent': '#66a182',
      'secondary_accent': '#9f87af',
      'compliment': '#445566',
      'contrast': '#faf8f8'
    },
  },
  plugins: [],
}