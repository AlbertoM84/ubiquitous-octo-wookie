(function() {
	"use strict"

	var fs = require('fs');

	module.exports = {
		options : {
		  SSL: {
		  	key: fs.readFileSync('./SSL/server.key'),
		  	cert: fs.readFileSync('./SSL/server.crt')
		  },
		  environment: {
		  	port: process.env.OPENSHIFT_NODEJS_POR || 8080,
		  	portS: 8081,
		  	ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
		  },
		  database: {
		  	//databaseUri: 'mongodb://127.0.0.1:27017/homecucine'
		  	databaseUri: 'database_uri_homecucine'

		  },
		  applicationAuth: {
		  	jsonTokenKey: 'signingwitha454difficult5pasweweeweffdfwggrvfws'
		  },
		  amazonS3: {
		  	accessKeyId: "amazonaccess",
	    	secretAccessKey: "amazonsecret",
	    	buckets: {
	    		'homecucine': 'homecucine'
	    	}
		  }
		}
	};

})();