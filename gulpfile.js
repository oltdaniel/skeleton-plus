const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const banner = require('gulp-banner');
const rename = require('gulp-rename');

gulp.task('scss', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(banner('/* skeleton-plus <https://github.com/oldaniel/skeleton-plus> , Copyright 2018, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(rename('skeleton-plus.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss:min', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(banner('/* skeleton-plus <https://github.com/oldaniel/skeleton-plus> , Copyright 2018, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(rename('skeleton-plus.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['scss', 'scss:min']);
});
