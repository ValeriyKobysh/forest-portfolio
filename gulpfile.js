const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    gzip = require('gulp-gzip'),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json");

const paths = {
    root: './dist',
    templates: {
        pages: 'src/views/*.pug',
        watch: 'src/**/*.pug',
        dist: 'dist/'
    },
    styles: {
        source: './src/sass/index.sass',
        watch: 'src/**/*.sass',
        dist: 'dist/css'
    },
    images: {
        source: './src/images/**/*.*',
        dist: 'dist/img'
    },
    typescript: {
        source: './src/ts/index.ts',
        dist: 'dist/js'
    },
    fonts: {
        source: './src/fonts/**/*.*',
        dist: 'dist/fonts'
    },
    libs: {
        source: '.src/lib/**/*.*',
        dist: 'dist/lib'
    },
    script: {
        source: './src/**/*.js',
        entryPoint: './src/js/index.js',
        dist: 'dist/js'
    }
}

const pug = require('gulp-pug');
/**
* ***PUG***
*/
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "HTML",
                    message: error.message
                };
            })
        }))
        .pipe(pug({ pretty: true }))
        .pipe(notify("HTML is done"))
        .pipe(gulp.dest(paths.templates.dist));
    }

const sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso');
/**
* ***SASS***
*/
function stylesDev() {
    return gulp.src(paths.styles.source)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "Style",
                    message: error.message
                };
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify("Styles is done"))
        .pipe(gulp.dest(paths.styles.dist))
    }

function stylesBuild() {
    return gulp.src(paths.styles.source)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gzip())
        .pipe(gulp.dest(paths.styles.dist))
    }

const imagemin = require('gulp-imagemin'),
    imageminGifsicle = require('imagemin-gifsicle'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminOptipng = require('imagemin-optipng'),
    imageminSvgo = require('imagemin-svgo');
/**
* ***IMAGES***
*/
function images() {
    return gulp.src(paths.images.source)
        // .pipe(imagemin({

        // }))
        .pipe(gulp.dest(paths.images.dist));
    }
/**
 * LIBS
 */
function libs() {
    return gulp.src(paths.libs.source)
        // .pipe(imagemin({

        // }))
        .pipe(gulp.dest(paths.libs.dist));
    }

/* ***FONTS***
*/
function fonts() {
    return gulp.src(paths.fonts.source)
        .pipe(gulp.dest(paths.fonts.dist));
    }
/**
* TYPESCRIPTS
*/
function typescripts() {
    return gulp.src(paths.typescript.source)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: "TypeScript",
                    message: error.message
                };
            })
        }))
        .pipe(ts({
            target: 'ES5',
            sourceMap: true,
            noImplicitAny: true,
            removeComments: true,
            moduleResolution: 'classic'
        }))
        .pipe(notify("TypeScript is done"))
        .pipe(gulp.dest(paths.typescript.dist))
    }
const gulpwebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');
/**
* SCRIPTS
*/
function scriptsJS() {
    return gulp.src(paths.script.entryPoint)
        .pipe(gulpwebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.script.dist));
    }

const del = require('del');
/**
* ***CLEAR DIST DIR***
*/
function clear() {
    return del(paths.root);
    }
/**
* ***WATCH SOURCE FILES***
*/
function watch() {
    gulp.watch(paths.styles.watch, stylesDev);
    gulp.watch(paths.templates.watch, templates);
    gulp.watch(paths.images.source, images);
    gulp.watch(paths.script.source, scriptsJS);
    gulp.watch(paths.typescript.source, typescripts);
    gulp.watch(paths.fonts.source, fonts);
    gulp.watch(paths.libs.source, libs);
    }
/**
* ***WATCH BUILD FILES AND RELOAD BROWSER***
*/
function server() {
    browserSync.init({
        server: paths.root
        });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
    }

exports.templates = templates;
exports.stylesDev = stylesDev;
exports.stylesBuild = stylesBuild;
exports.clear = clear;
exports.images = images;
exports.libs = libs;
exports.typescripts = typescripts;
exports.scriptsJS = scriptsJS;
exports.fonts = fonts;
exports.server = server;
exports.watch = watch;

gulp.task('default', gulp.series(
    gulp.parallel(stylesDev, templates, images, scriptsJS, fonts, libs),
    gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
    clear,
    gulp.parallel(stylesBuild, templates, images, scriptsJS, fonts, libs)
));