var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var config = require('../config.json');
var cwd = config.gulp.css.cwd || config.cwd;

gulp.task('css', function () {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src(`./${cwd}/src/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest(`./${cwd}/dest`));
});


// gulp.task('css', () => {
//     const postcss = require('gulp-postcss')
//     const sourcemaps = require('gulp-sourcemaps')

//     return gulp.src('src/**/*.css')
//       .pipe( sourcemaps.init() )
//       .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
//       .pipe( sourcemaps.write('.') )
//       .pipe( gulp.dest('build/') )
//   })