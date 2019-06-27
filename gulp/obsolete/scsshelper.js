//@ts-check
'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

class SCSSHelper {
    constructor(name) {
        this.name = name;
        this.compile = this.compile.bind(this);
        this.watch = this.watch.bind(this);
    }

    config(options) {
        this.scsspath = options.scsspath;
        this.csspath = options.csspath;
        return this;
    }

    runtasks() {
        gulp.task(`${this.name}-compile`, this.compile);
        gulp.task(`${this.name}-watch`, gulp.series(this.compile, this.watch));
    }

    compile(cb) {
        gulp.src(this.scsspath)
            .pipe(sass())
            .pipe(gulp.dest((f) => {
                return this.csspath || f.base;
            }));
        cb();
    }

    watch(cb) {
        gulp.watch(this.scsspath, gulp.series(this.compile));
        cb();
    };


}

module.exports = SCSSHelper;