const { v4: uuidv4 } = require('uuid');
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
    res.render('home.ejs', {
		id : uuidv4()
	})
});

app.get('/shirt_maker/:id', function(req, res){
	// console.log(req.params.id)
    res.render('shirt_maker.ejs', {
		id : req.params.id
	})
})

app.get('/buy/:id', function(req, res){
	console.log(req.query.gender)
	console.log(req.query.color)
	console.log(req.query.size)
	console.log(req.query.text)
	console.log(req.params.id)
	res.render('buy.ejs', {
		id : req.params.id
	})
	
})

// Actually set up the server
app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});
