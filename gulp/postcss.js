// gulp.task('css', () => {
//     const postcss = require('gulp-postcss')
//     const sourcemaps = require('gulp-sourcemaps')
  
//     return gulp.src('src/**/*.css')
//       .pipe( sourcemaps.init() )
//       .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
//       .pipe( sourcemaps.write('.') )
//       .pipe( gulp.dest('build/') )
//   })