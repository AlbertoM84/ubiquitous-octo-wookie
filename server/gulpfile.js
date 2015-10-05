var gulp = require('gulp'),
    htmlmin = require('gulp-html-minifier'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if');
 
gulp.task('default', function() {
  // place code for your default task here
});


// gulp.task('test', function () {
//     return gulp.src('test/core.js', {read: false})
//         .pipe(mocha({reporter: 'nyan'}));
// });


// gulp.task('compress', function() {
//   gulp.src('src/*.js')
//     .pipe(uglify())
//     .pipe(rename('animatr.min.js'))
//     .pipe(gulp.dest('dist'))
// });

gulp.task('sass', function () {
  gulp.src('./web_client/dev/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./web_client/dev/sass/*.scss', ['sass']);
})


gulp.task('copy', function(){
  gulp
    .src('web_client/dev/js/vendor/html5shiv.js')
    .pipe(gulp.dest('web_client/dist/js'));

    gulp
    .src('web_client/dev/css/dev/*')
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('web_client/dist/css/dev'));

    gulp
    .src('web_client/dev/images/*')
    .pipe(gulp.dest('web_client/dist/images'));

    gulp
    .src('web_client/dev/fonts/*')
    .pipe(gulp.dest('web_client/dist/fonts'));

    gulp
    .src('web_client/dev/html/*')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('web_client/dist/html'));
});

gulp.task('html', function () {
    var assets = useref.assets();
    return gulp.src('web_client/dev/index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('web_client/dist/'));
});