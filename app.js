const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var bodyParser = require('body-parser');

require("cookie-parser");

app.use(express.static('public'));
app.use(express.static(__dirname + "./public/"));
app.set('trust proxy', true);
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes-users
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, console.log('CMAP started on port 5000'));