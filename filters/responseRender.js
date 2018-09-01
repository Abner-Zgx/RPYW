const jwtUtil = require(cerberus.utils.jwtUtil);
const express = require("express");
const router = express.Router();

var self = function(res){
    var token = res.req.cookies["jwt-cerberus"]
    var payload = jwtUtil.verify(token);

    Promise.resolve()
    .then(() => {
        if(!payload) {
            throw new Error("need Login")
        } else {
            var options = {};
            options.layout = "layout"
            options.redirect = true
            options.env = process.env;
            res.render("home",options);
        }
    })
    .catch(err => {
        res.redirect(process.env.PROJECT_ROOT + '/login');
    });

}

module.exports = self;