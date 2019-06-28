const { series } = require('gulp');
const css = require('./css');
const webserver = require('./webserver');


exports.build = series(css.task, webserver.task);
exports.default = exports.build;

