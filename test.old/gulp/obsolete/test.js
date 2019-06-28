'use strict';
const SCSSHelper = require('./scsshelper.js.js');
for (let index = 1; index <= 4; index++) {
    let helper = new SCSSHelper(`test${index}`);
    helper.config({
        scsspath: `test${index}/src/*.scss`,
        csspath: `test${index}/css`
    }).runtasks();
}