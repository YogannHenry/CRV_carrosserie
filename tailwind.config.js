/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
=======
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'Cormorant_Garamond': ['Cormorant Garamond', 'serif'],
      'Dancing_Script': ['Dancing Script', 'cursive'],
      'Libre_Baskerville': ['Libre Baskerville', 'serif'],
      'Lobster': ['Lobster', 'sans-serif'],
      'Open_Sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'round': '1px 1px 10px 1px',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
>>>>>>> fix_main_branch
};
