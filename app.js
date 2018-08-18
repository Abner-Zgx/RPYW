const express = require('express');
const i18n = require('i18n');
const path = require('path');
const exphbs = require('express-handlebars');

var app = express();

// Specify a default enging - hbs
app.set('views', path.join(__dirname, 'views'));
app.engine('html', exphbs({
    layoutsDir: 'views',
    // defaultLayout: 'layout',
    extname: '.html'
}));
app.set('view engine', 'html');

// find the static sources
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
});

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), () => {
    console.log('server start');
});