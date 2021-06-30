import express from 'express';
import bodyParser from 'body-parser';

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Config object
const port = 5002;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render("home.ejs")
});

app.get('/home', function (req, res) {
    res.render("home.ejs")
});

app.get('/shirt_maker', function (req, res) {
    res.render("shirt_maker.ejs")
});

app.get('/buy', function (req, res) {
    res.render("buy.ejs")
});

app.listen(process.env.PORT || port, () =>
    console.log(`Listening on port http://localhost:${port}`)
);