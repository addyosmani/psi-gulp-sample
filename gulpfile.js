var gulp = require('gulp');
var psi = require('psi');
var site = 'http://www.html5rocks.com';
var key = '';

// Please feel free to use the `nokey` option to try out PageSpeed
// Insights as part of your build process. For more frequent use, 
// we recommend registering for your own API key. For more info:
// https://developers.google.com/speed/docs/insights/v1/getting_started

gulp.task('mobile', function (cb) {
	psi({
	    // key: key
	    nokey: 'true',
	    url: site,
	    strategy: 'mobile',
	}, cb);
});

gulp.task('desktop', function () {
	psi({
	    nokey: 'true',
	    // key: key,
	    url: site,
	    strategy: 'desktop',
	}, cb);
});

gulp.task('default', ['mobile']);
