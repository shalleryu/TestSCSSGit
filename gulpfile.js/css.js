var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var config = require('../config.json');
var cwd = config.gulp.css.cwd || config.cwd;

function task() {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src(`./${cwd}/src/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest(`./${cwd}/dest`));
}

exports.task = task;