const { series, watch, src, dest, parallel } = require('gulp')
const pump = require('pump')
const del = require('del')

const rename = require('gulp-rename')
const replace = require('gulp-replace')

// gulp plugins and utils
const livereload = require('gulp-livereload')
const beeper = require('beeper')
const postcss = require('gulp-postcss')
const zip = require('gulp-zip')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const header = require('gulp-header')

// Babel
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
//
const merge = require('merge-stream')

// postcss plugins
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const comments = require('postcss-discard-comments')
const tailwindcss = require('tailwindcss')

// sass
const sass = require('gulp-sass')(require('sass'))

// environment
const isProduction = process.argv.includes('--production') || process.env.NODE_ENV === 'production'

// Data collection on the theme
const { name, version, author, license, repository } = require('./package.json')

// Build Comments
const BuildComments = `/*!
 * ${name} v${version}
 * Copyright ${new Date().getFullYear()} ${author.name} <${author.email}> (${repository.url})
 * Licensed under ${license}
 */`

// clean assets
const clean = () => {
  return del([
    'assets',
    'partials/main-styles.hbs',
    'dist'
  ], { force: true })
}

function serve (done) {
  livereload.listen()
  done()
}

const handleError = done => {
  return function (err) {
    if (err) {
      beeper()
    }
    return done(err)
  }
}

// hbs
function hbs (done) {
  pump([
    src([
      '*.hbs',
      'partials/**/*.hbs'
    ]),
    livereload()
  ], handleError(done))
}

// style
function styles (done) {
  pump([
    src('src/sass/*.sass'),
    gulpif(!isProduction, sourcemaps.init()),
    sass({ outputStyle: 'expanded' }).on('error', sass.logError),
    gulpif(!isProduction, postcss([tailwindcss()])),
    gulpif(isProduction, postcss([tailwindcss(), autoprefixer(), cssnano(), comments({ removeAll: true })])),
    gulpif(isProduction, header(BuildComments)),
    gulpif(!isProduction, sourcemaps.write('./map')),
    dest('assets/styles'),
    livereload()
  ], handleError(done))
}

// Scripts
function scripts (done) {
  const files = ['main', 'post', /*'search',*/ 'prismjs', 'pagination']

  merge(files.map(function (file) {
    return pump([
      browserify({
        basedir: '.',
        debug: !isProduction,
        entries: `src/js/${file}.js`,
        cache: {},
        packageCache: {}
      }).transform('babelify', {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }).bundle(),
      source(`${file}.js`),
      buffer(),
      gulpif(!isProduction, sourcemaps.init()),
      gulpif(isProduction, uglify()),
      gulpif(isProduction, header(BuildComments)),
      gulpif(!isProduction, sourcemaps.write('./map')),
      dest('assets/scripts'),
      livereload()
    ], handleError(done))
  }))
}

// Image
function images (done) {
  pump([
    src('./src/img/**/*.*'),
    dest('assets/images'),
    livereload()
  ], handleError(done))
}

function copyAmpStyle (done) {
  pump([
    src('assets/styles/amp.css'),
    replace('@charset "UTF-8";', ''),
    postcss([cssnano(), comments({ removeAll: true })]),
    rename('amp-styles.hbs'),
    dest('partials/amp')
  ], handleError(done))
}

function copyMainStyle (done) {
  pump([
    src('assets/styles/main.css'),
    replace('@charset "UTF-8";', ''),
    postcss([cssnano(), comments({ removeAll: true })]),
    rename('main-styles.hbs'),
    dest('partials')
  ], handleError(done))
}

// ZIP
function zipper (done) {
  const filename = `${name}-v${version}.zip`

  pump([
    src([
      '**',
      '!node_modules', '!node_modules/**',
      '!dist', '!dist/**',
      '!src', '!src/**',
      '!docs', '!docs/**',
      '!gulpfile.js',
      '!.stylelintrc.json',
      '!tailwind.config.js',
      '!routes.yaml',
      '!CONTRIBUTING.md',
      '!yarn-error.log',
      '!yarn.lock'
    ]),
    zip(filename),
    dest('dist/')
  ], handleError(done))
}

const cssWatcher = () => watch('src/sass/**', styles)
const jsWatcher = () => watch('src/js/**', scripts)
const imgWatcher = () => watch('src/img/**', images)
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs'], hbs)

const compile = parallel(styles, scripts, images)
// const watcher = parallel(cssWatcher, jsWatcher, imgWatcher)
const watcher = parallel(cssWatcher, jsWatcher, imgWatcher, hbsWatcher)

const build = series(clean, compile)
const production = series(build, copyAmpStyle, copyMainStyle, zipper)
const development = series(build, serve, watcher)

module.exports = { build, development, production }
