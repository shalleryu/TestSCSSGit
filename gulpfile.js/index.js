const { series } = require('gulp');
const css = require('./css');
const webserver = require('./webserver');


exports.build = series(css.complie, css.watch, webserver.run);
exports.default = exports.build;

