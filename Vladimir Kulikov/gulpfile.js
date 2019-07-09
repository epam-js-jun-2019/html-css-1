'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write('./maps'))
   .pipe(gulp.dest('./css'));
 });
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.sass', gulp.parallel('sass'));
});

