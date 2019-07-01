var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var minifyHtml = require("gulp-minify-html");
var imagemin = require('gulp-imagemin');
var jshint = require("gulp-jshint");
var obfuscate = require('gulp-obfuscate');
var concat = require('gulp-concat');
var mWeb = 'coco/sms/';
var mWebCSS = [mWeb+'css/index.css'];
var mWebJS = [mWeb+'js/viewportJs.js'];
var mWebJS2 = [mWeb+'js/ajax.js',mWeb+'js/img-blur-in.min.js',mWeb+'js/route.js',mWeb+'js/share.js',mWeb+'js/index.js'];


gulp.task('minify-html', function () {
    return gulp.src(mWeb+'*.html') // 要压缩的html文件
    .pipe(minifyHtml())    //压缩
    .pipe(gulp.dest(mWeb+'release'));//输出到目的地
});
gulp.task('copy-images',function(){
    return gulp.src(mWeb+'img/**/*.{jpg,jpeg,png}')//指定要压缩的图片
        .pipe(imagemin()) //进行图片压缩
        .pipe(gulp.dest(mWeb+'release/img'));//输出目的地
});
gulp.task('js-concat', function() {
    return gulp.src(mWebJS)
		.pipe(uglify())
		.pipe(concat('viewportJs.js'))
		.pipe(gulp.dest(mWeb+'release/js'));
});
gulp.task('js2-concat', function() {
    return gulp.src(mWebJS2)
		.pipe(uglify())
		.pipe(concat('index.js'))
		.pipe(gulp.dest(mWeb+'release/js'));
});


gulp.task('css-concat', function() {
    return gulp.src(mWebCSS)
		.pipe(concat('main.css'))
		.pipe(minify())
		.pipe(gulp.dest(mWeb+'release/css'));
});
gulp.task('uglify',function(){
   return gulp.src(mWeb+'js/*.js')
	   .pipe(uglify()) //对合并后的app.js文件进行压缩
	   .pipe(gulp.dest(mWeb+'release/js'));
});
gulp.task('minify-css', function () {
    return gulp.src(mWeb+'css/*.css')
	.pipe(minify())//对 css再进行压缩
	.pipe(gulp.dest(mWeb+'release/css'));
});
//gulp.task('minify',['minify-html','copy-images','uglify','minify-css']);

gulp.task('minify',['js-concat','js2-concat','minify-css','copy-images']);

gulp.task('jsLint', function () {
	gulp.src(mWeb+'js/*.js')
	.pipe(jshint()) //进行代码检查
	.pipe(jshint.reporter()); // 输出检查结果
});

gulp.task('obfuscate',function(){
   return gulp.src(mWeb+'release/js/*.js')
		.pipe(obfuscate()); //压缩完代码混淆
});

