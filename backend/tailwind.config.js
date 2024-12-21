// filepath: /g:/Abdullah-codeacademy/react-django/backend/tailwind.config.js
module.exports = {
  content: [
    './templates/**/*.html',
    './static/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': {
          100: '#F5CCD4',
          200: '#E99AAB',
          300: '#DD6882',
          400: '#D13659',
          500: '#C50530',
          600: '#A10428',
          700: '#7D0320',
          800: '#590318', // Darker shade of #93143C
          900: '#350210',
        },
        'nav-text-color': '#6CEBC3', // Complementary text color
      },
    },
  },
  plugins: [],
}