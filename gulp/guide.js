'use strict';
const SCSSHelper = require('./scsshelper.js');
let helper = new SCSSHelper('guide');
helper.config({
    scsspath: 'guide/*.scss',
}).runtasks();