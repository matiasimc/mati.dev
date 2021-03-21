const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      blue: colors.blue,
    },
    fontFamily: {
      'sans': ['Bitter'],
    },
  },
  container: {
    center: true,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
