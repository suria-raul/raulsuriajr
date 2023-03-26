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
      },
      transitionProperty: {
        'visibility': 'visibility',
      },
      zIndex: {
        '1040': '1040',
      }
    },
    fontFamily: {
      'space-mono': '"Space Mono", Arial, serif',
      'kaushan': '"Kaushan Script", cursive',
    },
  },
  plugins: [],
}
