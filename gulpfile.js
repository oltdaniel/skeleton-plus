// Load the gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var banner = require('gulp-banner');
var rename = require('gulp-rename');

// Set variables
var bannerContent = '/* skeleton-plus v3.0 <https://github.com/oltmannsdaniel/skeleton-plus> , Copyright 2016, Daniel Oltmanns <daniel@thedcdesigns.com> */\n';

// Task to compile the sass
gulp.task('sass', function () {
  return gulp.src('./scss/skeleton-plus.scss')
    // Compile sass
    .pipe(sass().on('error', sass.logError))
    // Add the browser prefixes
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    // Add the banner
    .pipe(banner(bannerContent, {}))
    // Save it
    .pipe(gulp.dest('./css'));
});

// Task to minify the sass
gulp.task('sass:min', function () {
  return gulp.src('./scss/skeleton-plus.scss')
    // Compile sass
    .pipe(sass().on('error', sass.logError))
    // Add the browser prefixes
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    // Clean up the css
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // Add the banner
    .pipe(banner(bannerContent, {}))
    // Rename the output file
    .pipe(rename('skeleton-plus.min.css'))
    // Save it
    .pipe(gulp.dest('./css'));
});

// Task to watch the important files
gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass', 'sass:min']);
});
