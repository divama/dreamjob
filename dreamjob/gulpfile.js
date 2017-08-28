var gulp = require('gulp');

gulp.task('default', function() {
  gulp
    .src([
      'semantic/dist/**',
      '!semantic/dist/components',
      '!semantic/dist/components/**',
    ])
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
  gulp.watch('semantic/dist/*.css', ['default']);
});
