var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var banner = require('gulp-banner');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/skeleton-plus.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(banner('/* skeleton-plus <https://github.com/oltmannsdaniel/skeleton-plus> , Copyright 2016, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:min', function () {
  return gulp.src('./scss/skeleton-plus.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(banner('/* skeleton-plus <https://github.com/oltmannsdaniel/skeleton-plus> , Copyright 2016, Daniel Oltmanns <daniel@thedcdesigns.com> */\n', {}))
    .pipe(rename('skeleton-plus.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass', 'sass:min']);
});