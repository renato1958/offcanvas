var gulp = require('gulp');
var browsersync = require('browser-sync');

gulp.task('serve', function() {
	browsersync.init({
		server: './'
	});

	gulp.watch('*.html').on('change', browsersync.reload);
})

gulp.task('default', ['serve']);