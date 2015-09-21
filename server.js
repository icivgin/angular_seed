var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

// serve js and css files from public folder
app.use(express.static(__dirname + '/app'));

// Serve client
app.get('*', function (req, res, next) {
	res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000);