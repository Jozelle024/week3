/* jshint esversion:6 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');


gulp.task('sass', function(){
    return gulp.src('./sass/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch',function(){
    gulp.watch('./sass/*.scss', ['sass']);
});
