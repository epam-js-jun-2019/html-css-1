'use strict';
 
var gulp = require('./node_modules/gulp');
var sass = require('./node_modules/gulp-sass');

sass.compiler = require('./node_modules/node-sass/lib');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});