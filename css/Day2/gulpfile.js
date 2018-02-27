/* jshint esversion:6 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');

gulp.task('default', function(){ //task creation, (name of task, function)
    return gutil.log('Gulp in esecuzione'); // to execute on terminal -> gulp default

});
gulp.task('copiaFile', function(){
    //copy any html files in source / to public/
    gulp.src('./html*.html').pipe(gulp.dest('dist'));
    gulp.src('./javascript/*.js').pipe(gulp.dest('dist'));
    gulp.src('./css/*.css').pipe(gulp.dest('dist'));
});
gulp.task('sass', function(){
    return gulp.src('./sass/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch',function(){
    gulp.watch('./sass/*.scss', ['sass']);
});
