const express = require('express');
var router = express.Router();

// load web
router.use('/', require(cerberus.routes.web_router));

// request
router.post('/authenticate', require(cerberus.routes.authenticate));

router.post('/email',require(cerberus.routes.email));

module.exports = router