/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "index.html",
      "dist/js/main.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'space-mono': '"Space Mono", Arial, serif',
      'kaushan': '"Kaushan Script", cursive',
    },
  },
  plugins: [],
}
