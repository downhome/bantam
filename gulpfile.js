// Gulp tasks

// Load plugins 
var gulp = require('gulp'),
    fs = require('fs'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint'),
    css = require('css'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync'),
    stylestats = require('gulp-stylestats');
    
// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./css/framework.css')
    .pipe(minifyCSS())
    .pipe(rename('framework.min.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}));
});