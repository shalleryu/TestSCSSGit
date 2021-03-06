var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
var config = require('config');
var cwd = config.get('cwd');
// const debug = require('gulp-debug');

function convertImg() {
  var spriteData = gulp.src(`./${cwd}/images/*.png`).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: 'images/sprite.png',
    cssTemplate: './handlebars/custom.sprite.scss.handlebars'
  }));

  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(`./${cwd}/dist/images/`));

  var cssStream = spriteData.css
    .pipe(gulp.dest(`./${cwd}/src/`));

  return merge(imgStream, cssStream);
}

exports.convertImg = convertImg;
// exports.debug =
//   function () {
//     return gulp.src(`./*`)
//       .pipe(debug({ title: 'unicorn:' }))
//       .pipe(gulp.dest('dist'));
//   };
