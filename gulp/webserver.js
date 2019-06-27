var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config.json');
var src = config.gulp.webserver.src || config.cwd;
 
gulp.task('webserver', function() {
  gulp.src(`./${src}`)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 8081
    }));
});