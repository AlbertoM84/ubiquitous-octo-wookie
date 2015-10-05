 
var fs = require('fs');
var mongoose = require('mongoose');
var config = require('./config.js');

//Expose globally winston logger
require('./apps/utils/winston.js')

var db = mongoose.connect(config.options.database.databaseUri);
var bodyParser = require('body-parser');

var app = require('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('express').static(__dirname + '/public'));
app.use(require('prerender-node').set('prerenderToken', 'Vlr06RRu2ts1xinXuM2x'));

app.use(require('prerender-node').set('beforeRender', function(req, done) {
    console.log('ready to render');
    done();
}));

require('./apps/adminApp/routes/all.js')(app);
require('./apps/userApp/routes/all.js')(app);
require('./apps/auth/routes/all.js')(app);

require('./creatCarlo.js');



  winston.log('info', 'Hello distributed log files!');
  winston.info('Hello again distributed logs');
  winston.log('debug', 'configuration are: ', config.options.environment)
  winston.log('debug', 'Now my debug messages are written to console!');

/*
db.once('error', function(){
	throw new Error('Database connection failed, could not start up application');
});
*/

//db.once('open', function (callback) {

  // require('https')
  // 	.createServer({key: config.options.SSL.key, cert: config.options.SSL.cert}, app)
  // 	.listen(config.options.environment.portS, config.options.environment.ip, function() {
		// 	console.log('app is starting securely on port ' + config.options.environment.portS);
		// });

	require('http')
  	.createServer(app)
  	.listen(config.options.environment.port, config.options.environment.ip, function() {
			console.log('app is starting on port' + config.options.environment.port);
		});
//});
