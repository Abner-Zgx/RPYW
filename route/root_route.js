const express = require('express');
var app = express();
var router = express.Router();

// load web
router.use('/', require(cerberus.route.web_route));

// request
router.post('/login', require('../connection/test.js'));

module.exports = router