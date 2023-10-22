/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: '#1D0C3B',
        secondaryColor: '#FFCB32',
        tertiaryColor:'#4e22a1'
      }
    },
  },
  plugins: [],
}

