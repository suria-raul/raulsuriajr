/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "dist/js/main.js",
  ],
  theme: {
    extend: {
      rotate: {
        '5': '5deg',
      },
      colors: {
        'golden-yellow': '#d4af37',
        'transparent-black': 'rgba(0, 0, 0, .5)',
      },
      transitionProperty: {
        'visibility': 'visibility',
        'right': 'right',
      },
      zIndex: {
        '1040': '1040',
        '1060': '1060',
      },
      transitionDuration: {
        '1': '.1s',
        '3': '.3s',
      }
    },
    fontFamily: {
      'space-mono': '"Space Mono", Arial, serif',
      'kaushan': '"Kaushan Script", cursive',
    },
  },
  plugins: [],
}
