const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass () {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function funçãoPadrao (callback) {
    console.log("executando via Gulp");
    callback();
}

exports.default = funçãoPadrao;
exports.sass = compilaSass;
exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false },gulp.series(compilaSass));
}

exports.javascript = comprimeJavaScript

exports.images = comprimeImagens



