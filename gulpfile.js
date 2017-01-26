var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

var path = {
    images: 'app/images/**/*.{png,svg,js}',
    data: 'app/**/*.json',
    stylesheets: 'app/src/stylesheets/**/*.less',
    js: 'app/src/**/*.js'
};

gulp.task('copy-index', function () {
    return gulp.src('app/src/index.html')
        .pipe(gulp.dest('app/dist'))
        .pipe(connect.reload());
});

gulp.task('images', function () {
    return gulp.src(path.images)
        .pipe(imagemin())
        .pipe(gulp.dest('app/dist/images'))
        .pipe(connect.reload());
});

gulp.task('data', function () {
    return gulp.src([path.data, '!json/secret-*.json'])
        .pipe(gulp.dest('app/dist/data'))
        .pipe(connect.reload());
});

gulp.task('babel', function () {
    return gulp.src('app/src/**/*js')
        .pipe(babel())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('less', function () {
    return gulp.src(path.stylesheets)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('app/dist/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    return gulp.src(path.js)
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(gulp.dest('app/dist/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('server', function () {
    connect.server({
        root: 'app/',
        port: 8081,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch('app/src/index.html', ['copy-index']);
    gulp.watch(path.images, ['images']);
    gulp.watch(path.data, ['data']);
    gulp.watch(path.js, ['scripts']);
    gulp.watch(path.stylesheets, ['less']);
});

gulp.task('build', ['images', 'less', 'scripts'], function () {
    console.log('==================== build succeed ====================');
});

gulp.task('default', ['server', 'watch']);
