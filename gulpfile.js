var gulp = require('gulp')
  , copy = require('gulp-contrib-copy')
  , jade = require('gulp-jade');

gulp.task('cp_server_views', function(){
  gulp.src('client/server-views/**/*')
    .pipe( gulp.dest('server/views/') )
});

gulp.task('cp_web_views', function(){
  gulp.src('client/web/**/*.jade')
    .pipe( jade() )
    .pipe( gulp.dest('server/public/html/') )
});