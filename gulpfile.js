var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    yargs = require('yargs'),
    jQuery = require('jquery'),
    request = require('request'),
    csv = require('csv'), 
    fs = require('fs');
    
var parse = require('csv-parse');
require('should');

    
var red     = gutil.colors.red,
    yellow  = gutil.colors.yellow,
    blue		= gutil.colors.blue,
    green		= gutil.colors.green,
    magenta = gutil.colors.magenta;
    
require('./credentials.js');

gulp.task('test',function() {
	var args = yargs
		.alias('c','connection')
		.alias('f','input_file')
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
  
  if(args.input_file) {
  	fs.readFile('./'+args.input_file, 'utf8', function (err,data) {
	  	if (err) {
		    return console.log(err);
		  }
		  parse(data, {comment: '#', columns: true}, function(err, output){
			 	if (err) {
			    return console.log(err);
			  }
			  Object.keys(output[0]).should.eql([
			  	'event_id',
			    'user_id',
			    'convention_id',
			    'priority',
			    'sellable',
			    'price',
			    'allow_schedule_conflicts',
			    'custom_fields',
			    'age_range',
			    'name',
			    'duration',
			    'description',
			    'max_tickets',
			    'more_info_uri',
			    'alternatedaypart_id',
			    'preferreddaypart_id',
			    'type_id',
			    'long_description'
			  ]);
			  if(output.length < 1) {
			  	console.log('Error: No Data in '+args.input_file);
			  }
			});
		});
  }
});

gulp.task('submit',function() {
	var args = yargs
		.alias('f','input_file')
		.argv;
		
  if(args.input_file) {
  	fs.readFile('./'+args.input_file, 'utf8', function (err,data) {
	  	if (err) {
		    return console.log(err);
		  }
		  parse(data, {comment: '#', columns: true}, function(err, output){
			 	if (err) {
			    return console.log(err);
			  }
			  Object.keys(output[0]).should.eql([
			  	'event_id',
			    'user_id',
			    'convention_id',
			    'priority',
			    'sellable',
			    'price',
			    'allow_schedule_conflicts',
			    'custom_fields',
			    'age_range',
			    'name',
			    'duration',
			    'description',
			    'max_tickets',
			    'more_info_uri',
			    'alternatedaypart_id',
			    'preferreddaypart_id',
			    'type_id',
			    'long_description'
			  ]);
			  if(output.length < 1) {
			  	console.log('Error: No Data in '+args.input_file);
			  }
			  
				request.post(
			    'https://tabletop.events/api/session',
			    { json: creds },
			    function (error, response, body) {
			    	gutil.log(response.statusCode+"\n");
		        if (!error && response.statusCode == 200) {
		            var session_id = body.id;
		            console.log('session '+session_id);
		            var 
		            	
		        }
			    }
				);			  
			});
		});
  }		
});