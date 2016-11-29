var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    yargs = require('yargs'),
    jQuery = require('jquery');
    
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
  	jQuery.ajax({
  		url: 'https://tabletop.events/api/',
  		method: 'POST',
  		data: creds,
  		dataType: 'json'
  	}).done(function(data) {
  		gutil.log(data);
  	});
  }	
});