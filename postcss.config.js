module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.APP_ENV === 'production' ? { cssnano: {} } : {})
    }
}