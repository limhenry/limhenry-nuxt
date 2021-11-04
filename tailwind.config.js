const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sky: colors.sky
      },
      aspectRatio: {
        1000: '1000',
        659: '659'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
