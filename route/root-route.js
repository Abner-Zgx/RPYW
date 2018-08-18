const express = require('express');
var app = express();
var router = express.Router();

router.use('/', require('./web-route'));

module.exports = router