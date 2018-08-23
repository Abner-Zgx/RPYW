const jwt = require("jsonwebtoken");
const algorithm = "HS256"
const secret = "zgx666"

var jwtUtil = {

    // verify the jwt
    verify: function(token) {
        try {
            return jwt.verify(token, secret, { algorithm: algorithm });
        } catch(err) {
            console.log(err);
            return null;
        }

    },

    // encrypt the payload
    encrypt: function(payload) {
        jwt.sign(payload, secret, { algorithm: algorithm }, (err, token) => {

        });
    }

}

module.exports = jwtUtil
