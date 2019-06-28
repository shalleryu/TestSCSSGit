const { watch } = require('gulp');

exports.default = function() {
  // The task will be executed upon startup
  watch('src/*.js', { ignoreInitial: false }, function(cb) {
    // body omitted
    cb();
  });
};