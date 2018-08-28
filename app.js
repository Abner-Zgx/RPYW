const express = require('express');
const i18n = require('i18n');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // use env

// difine global constant
global.base_dir = __dirname;

// require the configure of file path
require('./configs/path_conf.js')

var app = express();

// get req with cookie
app.use(cookieParser());
// get param by req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 添加setLocale中间件，注意必须在配置session之后
app.use(setLocale);

// 定义setLocale中间件
function setLocale(req, res, next){

  var locale;
  //配置i18n
  i18n.configure({
    locales: ['en', 'zh'],  //声明包含的语言
    register: res,
    directory: __dirname + '/i18n',  //翻译json文件的路径
    defaultLocale: 'zh',   //默认的语言，即为上述标准4
    indent: "\t",
    // extension: '.json' // 由于 JSON 不允许注释，所以用 js 会方便一点，也可以写成其他的，不过文件格式是 JSON
  });

 //客户端可以通过修改cookie进行语言切换控制
  if(req.cookies['locale']){
    locale = req.cookies['locale'];
  }
  else if(req.acceptsLanguages()){
    locale = req.acceptsLanguages()[0];
  }
  if(!~['en', 'zh'].indexOf(locale)) {
    locale = 'zh';
  }
  // 设置i18n对这个请求所使用的语言
  res.setLocale(locale);
  next();
};

// specify a default enging - hbs (with i18n)
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

// find the static sources
app.use(express.static('public'));

// load database
const dbUtil = require(cerberus.utils.dbUtil);
cerberus.dbPool = dbUtil.loadDB(process.env.MYSQL_URL);

// get route and render the view 
app.use('/', require(cerberus.routes.root_router));

// //开发环境错误处理
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// //生产环境错误处理
// // no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), () => {
    console.log('server start');
});