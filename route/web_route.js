const express = require('express');
var app = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect(process.env.PROJECT_URL+'/login')
});

router.get('/login', (req, res) => {
    res.render('login');
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