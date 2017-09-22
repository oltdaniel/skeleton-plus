const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const banner = require('gulp-banner');
const rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(banner('/* skeleton-plus <https://github.com/oldaniel/skeleton-plus> , Copyright 2017, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(rename('skeleton-plus.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:min', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(banner('/* skeleton-plus <https://github.com/oldaniel/skeleton-plus> , Copyright 2017, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(rename('skeleton-plus.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass', 'sass:min']);
});
