const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    'theme.config.js'
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        lightest: colors.blue[200],
        light: colors.blue[300],
        normal: colors.blue[400],
        default: colors.blue[700],
        dark: colors.blue[800],
      },
    },
    extend: {
      height: {
        5.5: '1.375rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
      },
      padding: {
        'p-2px': '2px',
      },
      width: {
        5.5: '1.375rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
      },
    },
  },
  components: {
    // TODO: describe or override components default values here
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    require('nightwind'),
    require('./plugins/avatar.plugin'),
  ],
}