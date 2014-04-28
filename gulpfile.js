var gulp = require('gulp');
var clean = require('gulp-clean');
var filesToMove = [
    './bower_components/ember/ember.js',
    './bower_components/ember-data/ember-data.min.js',
    './bower_components/handlebars/handlebars.min.js',
    './bower_components/jquery/jquery.min.js'

];

gulp.task('clean', function(){
  return gulp.src(['public/js/libs/*'], {read:false})
  .pipe(clean());
});

gulp.task('move',['clean'],function(){
    return gulp.src(filesToMove,{base:'./bower_components/'})
        .pipe(gulp.dest('./public/js/libs'));

});


gulp.task('scripts',function(){
    return gulp.src(path.scripts)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./public/js/libs'));
});

gulp.task('watch',function(){
    gulp.watch('./public/js/*',['scripts']);
});


gulp.task('default',['move']);