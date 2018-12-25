const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const output = './dist/'
const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

gulp.task('default', ['prod', 'dev'])

gulp.task('prod', function () {
	return build('./src/main.scss', 'anthonic', true, '.min')
})

gulp.task('dev', function () {
	return build('./src/main.scss', 'anthonic', false, '')
})

gulp.task('watch', function () {
	return gulp.watch('./src/**/*.scss', ['dev'])
})

function build(source, basename, compress = false, suffix = '.min') {
	sassOption.outputStyle = compress == true ? 'compressed' : 'expanded'
	gulp.src(source)
	.pipe(sass(sassOption).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(rename({
		basename: basename,
		suffix: suffix,
		extname: '.css'
	}))
	.pipe(gulp.dest(output))
}