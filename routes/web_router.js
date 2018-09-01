const express = require('express');
var app = express();
var router = express.Router();
const responseRender = require(cerberus.filters.responseRender);

router.get('/', (req, res) => {
    responseRender(res);
});

router.get('/login', (req, res) => {
    res.render('login', {env: process.env});
});

router.get('/forgot', (req, res) => {
    res.render('forgot');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/reset', (req, res) => {
    res.render('reset');
});

module.exports = router