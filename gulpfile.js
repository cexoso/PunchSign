var gulp = require('gulp'),
  connect = require('gulp-connect'),
   jshint = require('gulp-jshint');
gulp.task('server', function() {
    
  connect.server({
    root: ['app','bower_components','node_modules'],
    livereload: true,
    port:80
  });
  var rel=['app/views/**/*.html','app/scripts/**/*.js','app/styles/**/*.css'];
  gulp.watch(rel,function(){
    gulp.src('./app/*.html')
    .pipe(connect.reload());
  });

});

gulp.task('lint', function() {
   var js=['app/scripts/**/*.js'];
    gulp.watch(js,function(){
        gulp.src(js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    });
});

gulp.task('default', ['server']);



