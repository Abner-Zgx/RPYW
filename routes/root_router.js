const express = require('express');
var app = express();
var router = express.Router();

// load web
router.use('/', require(cerberus.routes.web_router));

// request
router.post('/authenticate', require(cerberus.routes.authenticate));

module.exports = router