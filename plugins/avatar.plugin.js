const plugin = require('tailwindcss/plugin');

// TODO: replace white/black to light/dark
module.exports = plugin(({ addComponents, theme }) => { 
  // TODO: access to default component configuration and merge values
  // config('components.avatar')

  const avatars = {
    '.avatar': {
      position: 'relative',
      color: theme('colors.white'),
      backgroundColor: theme('colors.primary.default'),
      width: theme('width[9.5]'),
      height: theme('height[9.5]'),
      overflow: 'hidden',
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.875rem',
      lineHeight: '1rem'
    },
    '.avatar-xs': {
      width: theme('width[5.5]'),
      height: theme('height[5.5]'),
      fontSize: '0.5rem',
    },
    '.avatar-sm': {
      width: theme('width[7.5]'),
      height: theme('height[7.5]'),
      fontSize: '0.75rem',
    },
    '.avatar-lg': {
      width: theme('width.12'),
      height: theme('height.12'),
    },
    '.avatar-xl': {
      width: theme('width.14'),
      height: theme('height.14'),
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    '.avatar-border': {
      borderStyle: 'solid',
      borderColor: theme('colors.primary.light'),
      borderWidth: '4px',
      boxSizing: 'content-box'
    },
    '.avatar-accent': {
      border: `2px solid transparent`,
      padding: theme('padding.p-2px'),
      backgroundImage: `
        linear-gradient(${theme('colors.primary.default')}, ${theme('colors.primary.default')}),
        linear-gradient(${theme('colors.white')}, ${theme('colors.white')}),
        linear-gradient(to bottom, red, orange)`,
      backgroundOrigin: `border-box`,
      backgroundClip: `content-box, padding-box, border-box`,
      boxSizing: 'content-box'
    },
    '.avatar-accent-dark': {
      backgroundImage: `
        linear-gradient(${theme('colors.primary.default')}, ${theme('colors.primary.default')}),
        linear-gradient(${theme('colors.black')}, ${theme('colors.black')}),
        linear-gradient(to bottom, red, orange)`,
    },
  }

  addComponents(avatars)
})