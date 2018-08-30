const express = require('express');
const i18n = require('i18n');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/* env */
require('dotenv').config(); // use env
require('./configs/envExtension.js'); // extend the env

/* router map */
global.base_dir = __dirname; // difine global constant
require('./configs/path_conf.js'); // require the configure of file path

var app = express();

/* parse cookie and request data */
app.use(cookieParser()); // get req with cookie
app.use(bodyParser.json()); // get param by req.body
app.use(bodyParser.urlencoded({ extended: true }));

/* i18n */

app.use(setLocale); // 注意必须在配置session之后
function setLocale(req, res, next) { // 定义setLocale中间件
  var locale;
  i18n.configure({
    locales: ['en', 'zh'],
    register: res,
    directory: __dirname + '/i18n',
    defaultLocale: 'zh',
    indent: "\t",
    extension: '.json'
  });

  // user can use cookie to alter the language
  if (req.cookies['locale']) {
    locale = req.cookies['locale'];
  }
  else if (req.acceptsLanguages()) {
    locale = req.acceptsLanguages()[0];
  }
  if (!~['en', 'zh'].indexOf(locale)) {
    locale = 'zh';
  }
  res.setLocale(locale);   // reset language
  next();
};

/* specify a default enging - hbs (with i18n) */
app.set('views', path.join(__dirname, 'views'));
app.engine('html', exphbs({
  // defaultLayout: 'layout',
  layoutsDir: 'views',
  extname: '.html',
  helpers: {
    '__': function () { return i18n.__.apply(this, arguments) }
  }
}));
app.set('view engine', 'html');

/* load database */
const dbUtil = require(cerberus.utils.dbUtil);
cerberus.dbPool = dbUtil.loadDB(process.env.MYSQL_URL);

/* get route, render the view and load resource */
app.get('/', (req,res) => {res.redirect(process.env.PROJECT_ROOT);})
app.use(process.env.PROJECT_ROOT, require(cerberus.routes.root_router));
app.use(process.env.PROJECT_ROOT, express.static('public')); // find the static sources

// 开发环境错误处理
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// 生产环境错误处理
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), () => {
  console.log('server start');
});