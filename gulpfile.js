var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    yargs = require('yargs'),
    jQuery = require('jquery'),
    request = require('request');
    
var red     = gutil.colors.red,
    yellow  = gutil.colors.yellow,
    blue		= gutil.colors.blue,
    green		= gutil.colors.green,
    magenta = gutil.colors.magenta;
    
require('./credentials.js');

gulp.task('test',function() {
	var args = yargs
		.alias('c','connection')
		.argv;
	
  if(args.connection) {
		request.post(
	    'https://tabletop.events/api/session',
	    { json: creds },
	    function (error, response, body) {
	    	gutil.log(response.statusCode+"\n");
        if (!error && response.statusCode == 200) {
            gutil.log(body)
        }
	    }
		);
  }	
});