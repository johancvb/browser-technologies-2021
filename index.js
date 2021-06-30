const { v4: uuidv4 } = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var json = require('./data.json')
// const localStorage = require('node-localstorage')



var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 5000;



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.redirect('/home');
});



app.get('/shirt_maker', function (req, res) {

    res.render('shirt_maker.ejs');
});

// app.get('/buy', function (req, res) {
// 	res.render('buy.ejs');
// });

app.post('/buy', urlencodedParser, function (req, res) {


    res.render("buy.ejs", {
        data: json
    })
})

app.get('/home', function (req, res) {

    res.render('home.ejs', {
        data: json
    });
});


// Actually set up the server
app.listen(port, function () {
    console.log(`Application started on port: ${port}, http://localhost:${port}`);
});
