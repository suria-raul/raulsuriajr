require('dotenv').config()

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
        "index.html",
        "dist/js/main.js",
    ],
});

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}