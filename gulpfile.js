var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');  // 文件重命名
var rev = require('gulp-rev');   // 更改版本号
var revCollector = require('gulp-rev-collector');   //用户html模板更改引用路径
var merge = require('merge-stream');
var scsslint = require('gulp-scss-lint');
var cache = require('gulp-cached');

gulp.task('scss-lint', function () {
  return gulp.src('src/**/**/*.scss')
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});


gulp.task('watch', function () {
  gulp.watch([
    'src/**/**/*.scss'
  ], ['scss-lint']);
});

gulp.task('clean', function () {
  return gulp.src('public')
    .pipe(clean());
});

// 复制文件
gulp.task('copy', function () {
  return merge(
    gulp.src('src/index.html')
      .pipe(gulp.dest('public'))
  );

});

gulp.task('default', ['copy']);
