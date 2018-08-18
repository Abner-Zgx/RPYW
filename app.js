const express = require('express');
const i18n = require('i18n');
const path = require('path');
const exphbs = require('express-handlebars');

var app = express();

i18n.configure({
    locales:['en', 'zh'],  // setup some locales - other locales default to en_US silently
    defaultLocale: 'en',
    directory: './i18n',  // i18n 翻译文件目录，我的是 i18n， 可以写成其他的。
    updateFiles: false,
    indent: "\t",
    extension: '.json'  // 由于 JSON 不允许注释，所以用 js 会方便一点，也可以写成其他的，不过文件格式是 JSON
});

// Specify a default enging - hbs
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
app.get('/', (req, res) => {
    res.render('login');
});

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), () => {
    console.log('server start');
});