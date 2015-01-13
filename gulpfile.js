var gulp = require('gulp');
var psi = require('psi');
var site = 'http://www.html5rocks.com';
var key = '';

// TODO FOR YOU:
// Register for own key over at https://console.developers.google.com/
// Following this guide: 
// https://developers.google.com/speed/docs/insights/v1/getting_started

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

gulp.task('default', ['mobile']);

