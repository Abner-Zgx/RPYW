const express = require('express');
const i18n = require('i18n');
const path = require('path');
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

i18n.configure({
    locales:['en', 'zh'],  // setup some locales - other locales default to en silently
    defaultLocale: 'zh',
    directory: './i18n', 
    updateFiles: false,
    indent: "\t",
    extension: '.json'
});

// specify a default enging - hbs
app.set('views', path.join(__dirname, 'views'));
app.engine('html', exphbs({
    // defaultLayout: 'layout',
    layoutsDir: 'views',
    extname: '.html',
    helpers: {
        '__': function() { return i18n.__.apply(this, arguments) }
    }
}));
app.set('view engine', 'html');

// find the static sources
app.use(express.static('public'));

// get route and render the view 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', require('./route/root-route'));

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), () => {
    console.log('server start');
});