let mix = require('laravel-mix');

mix.js('js/main.js', 'dist/js/')
    .sass('css/style.scss', 'dist/css/');