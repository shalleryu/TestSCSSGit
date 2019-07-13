const { series } = require('gulp');
const css = require('./css');
const webserver = require('./webserver');
const sprite = require('./sprite');


exports.build = series(sprite.convertImg, css.complie, css.watch, webserver.run);
exports.default = exports.build;

