var gulp = require('gulp');
var psi = require('psi');
var site = 'http://www.html5rocks.com';
var key = 'AIzaSyCHBBOqcgSVUC_shyK6BEAKOZZoBpJCF6g';

// TODO FOR YOU:
// Register for own key over at https://console.developers.google.com/
// Following this guide: 
// https://developers.google.com/speed/docs/insights/v1/getting_started
// You shouldn't use the above key for your own builds.

gulp.task('mobile', function () {
	return psi({
	    key: key,
	    url: site,
	    strategy: 'mobile',
	});
});

gulp.task('desktop', function () {
	return psi({
	    key: key,
	    url: site,
	    strategy: 'desktop',
	});
});

gulp.task('default', ['mobile']);