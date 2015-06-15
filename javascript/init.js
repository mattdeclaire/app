require.config({
	paths: {
		'requirelib': 'vendor/require',
		'jquery': 'vendor/jquery-1.11.3',
		'underscore': 'vendor/underscore-1.8.3',
		'json2': 'vendor/json2',
		'backbone': 'vendor/backbone-1.2.0',
		'backbone.wreqr': 'vendor/backbone.wreqr-1.3.2',
		'backbone.babysitter': 'vendor/backbone.babysitter-0.1.6',
		'marionette': 'vendor/backbone.marionette-2.4.1',
	},
	shim: {
		'json2': {
			exports: 'JSON'
		},
	}
});

require([
	'jquery',
	'app'
], function(
	$,
	app
) {
	$(function() {
		app.start();
	});
});