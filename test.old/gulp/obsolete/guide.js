'use strict';
const SCSSHelper = require('./scsshelper.js.js');
let helper = new SCSSHelper('guide');
helper.config({
    scsspath: 'guide/*.scss',
}).runtasks();