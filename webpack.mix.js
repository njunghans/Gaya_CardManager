const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .js('resources/js/render.js', 'js')
    .js('resources/js/cardGallery.js', 'js')
    .js('resources/js/setGallery.js', 'js')
    .sass('resources/sass/app.scss', 'css')
    .sass('resources/sass/basic.scss', 'css')
    .webpackConfig({
        node: {
            fs: 'empty'
        },
    })
    .sourceMaps();

