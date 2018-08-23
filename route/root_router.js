const express = require('express');
var app = express();
var router = express.Router();

// load web
router.use('/', require(cerberus.route.web_router));

// request
router.post('/authenticate', require(cerberus.utility.authenticate));

module.exports = router