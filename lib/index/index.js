/**
 * This is a self-contained module that defines its routes, callbacks, models and views
 * all internally. Such approach to code organization follows the recommendations of TJ:
 *
 * http://vimeo.com/56166857
 *
 */

// Third-party libraries
var _ = require('underscore'),
	CONF = require('config'),
	express = require('express'),
	app = exports = module.exports = express();

// Module's Routes
app.get('/', function(req, res) {
	res.redirect("http://aux.jyt.eu.ams1.nodejitsu.com");
});