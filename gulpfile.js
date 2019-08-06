const { src, dest, series, watch, parallel } = require('gulp')
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const output = './dist/'
const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

function watchFile() {
	watch('./src/**/*.scss', dev);
}

function dev () {
	return build('./src/main.scss', 'anthonic', false, '')
}

function production () {
	return build('./src/main.scss', 'anthonic', true, '.min')
}

function build(source, basename, compress = false, suffix = '.min') {
	sassOption.outputStyle = compress == true ? 'compressed' : 'expanded'
	return src(source)
	.pipe(sass(sassOption).on('error', sass.logError))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 2 versions']
	}))
	.pipe(rename({
		basename: basename,
		suffix: suffix,
		extname: '.css'
	}))
	.pipe(dest(output))
}

exports.watch = parallel(watchFile);
exports.prod = series(production)
exports.dev = series(dev)
exports.default = series(dev, production)