var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
    gutil 		= require('gulp-util'),
    maps 		= require('gulp-sourcemaps'),
    sass 		= require('gulp-sass'),
    uglify		= require('gulp-uglify')
    rename		= require('gulp-rename'),
    browserSync = require('browser-sync');
    autoprefix	= require('gulp-autoprefixer');

var jsSources = [
  'components/js/app.js'
];

gulp.task("concatScripts", function() {
	return gulp.src(jsSources)
		.pipe(maps.init())
		.pipe(concat("script.js"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest("builds/dev/js"));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src('builds/dev/js/script.js')
		.pipe(uglify())
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest('wp/wp-content/themes/kaffia/js'))
});

gulp.task('sass', function() {
	return gulp.src('components/sass/style.scss')
		.pipe(sass({outputStyle: 'expanded'})
		.on('error', sass.logError))
		.pipe(autoprefix('last 2 versions'))
		.pipe(gulp.dest('wp/wp-content/themes/kaffia'))
});

gulp.task('browser-sync', function() {
	browserSync.init([
		'wp/wp-content/themes/kaffia/style.css',
		'wp/wp-content/themes/kaffia/js/script.min.js',
		'wp/wp-content/themes/kaffia/*.php'
		],
		{
		proxy: "http://localhost:80/slutprojekt/wp/"
	});
});

gulp.task('watch', function(){
	gulp.watch(jsSources, ['minifyScripts']);
	gulp.watch('components/sass/*.scss', ['sass']);
});

gulp.task('default', ['minifyScripts', 'sass', 'watch']);



