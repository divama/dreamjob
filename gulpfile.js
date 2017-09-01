var gulp = require('gulp');

gulp.task('default', function() {
  gulp
    .src([
      'dreamjob/semantic/dist/**',
      '!dreamjob/semantic/dist/components',
      '!dreamjob/semantic/dist/components/**',
    ])
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
  gulp.watch('dreamjob/semantic/dist/*.css', ['default']);
});
