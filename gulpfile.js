'use strict'

// Load Plugins
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const cleanCSS = require('gulp-clean-css')
const del = require('del')
const gulp = require('gulp')
const header = require('gulp-header')
const merge = require('merge-stream')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')

// Load package.json for banner
const pkg = require('./package.json')

// Set the banner content
const banner = [
  '/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright ' + new Date().getFullYear(),
  ' <%= pkg.author %>\n',
  ' */\n',
  '\n',
].join('')

// BrowserSync
function bSync(done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  })
  done()
}

// BrowserSync reload
function bSyncReload(done) {
  browserSync.reload()
  done()
}

// Clean libs
function clean() {
  return del(['./libs/'])
}

// Bring third party dependencies from node_modules into libs directory
function modules() {
  // Bootstrap JS
  let bootstrapJS = gulp
    .src('./node_modules/bootstrap/dist/js/*')
    .pipe(gulp.dest('./libs/bootstrap/js'))

  // Font Awesome CSS
  let fontAwesomeCSS = gulp
    .src('./node_modules/@fortawesome/fontawesome-free/css/**/*')
    .pipe(gulp.dest('./libs/fontawesome-free/css'))

  // Font Awesome Webfonts
  let fontAwesomeWebfonts = gulp
    .src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./libs/fontawesome-free/webfonts'))

  // Jquery Easing
  let jqueryEasing = gulp
    .src('./node_modules/jquery-easing/*.js')
    .pipe(gulp.dest('./libs/jquery-easing'))

  // JQuery
  let jquery = gulp
    .src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js',
    ])
    .pipe(gulp.dest('./libs/jquery'))

  return merge(
    bootstrapJS,
    fontAwesomeCSS,
    fontAwesomeWebfonts,
    jquery,
    jqueryEasing
  )
}

// CSS task
function css() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths: './node_modules',
      })
    )
    .on('error', sass.logError)
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(gulp.dest('./css'))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

// JS task
function js() {
  return gulp
    .src(['./js/*.js', '!./js/*.min.js'])
    .pipe(uglify())
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream())
}

// Watch files
function watchFiles() {
  gulp.watch('./scss/**/*', css)
  gulp.watch(['./js/**/*', '!./js/**/*.min.js'], js)
  gulp.watch('./**/*.html', bSyncReload)
}

// Define complex tasks
const build = gulp.series(clean, modules, gulp.parallel(css, js))
const watch = gulp.series(build, gulp.parallel(watchFiles, bSync))

// Export tasks
exports.default = build
exports.watch = watch
exports.clean = clean
