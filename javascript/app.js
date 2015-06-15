define([
	'marionette'
], function(
	Marionette
) {
	var app = new Marionette.Application();

	app.on('start', function() {
		console.log('start');
	});

	return app;
});