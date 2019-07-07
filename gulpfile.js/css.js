var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var config = require('config');
var cwd = config.get('cwd');

function complie() {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src(`./${cwd}/src/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write(`../maps`))
        .pipe(gulp.dest(`./${cwd}/dist`));
}

async function watch() {
    await gulp.watch(`./${cwd}/src/*.scss`, complie);
}

exports.complie = complie;
exports.watch = watch;