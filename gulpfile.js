var gulp = require('gulp');
var psi = require('psi');
var site = 'http://www.html5rocks.com';
var key = '';

// TODO FOR YOU:
// Register for own key over at https://console.developers.google.com/
// Following this guide: 
// https://developers.google.com/speed/docs/insights/v1/getting_started

gulp.task('mobile', function (cb) {
	return psi({
		// key: key
	    nokey: 'true',
	    url: site,
	    strategy: 'mobile',
	}, cb);
});

gulp.task('desktop', function () {
	return psi({
		nokey: 'true',
	    // key: key,
	    url: site,
	    strategy: 'desktop',
	}, cb);
});

gulp.task('default', ['mobile']);