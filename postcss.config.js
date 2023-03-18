const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
        "index.html",
        "dist/js/main.js",
    ],
});

module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
};