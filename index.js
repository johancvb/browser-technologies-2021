const express = require('express');

const config = {
	port: 5000
}


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.redirect('/home');
});

// Create overview page
app.get('/home', function (req, res) {

});


// Actually set up the server
app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});