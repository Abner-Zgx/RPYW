const express = require("express");
const jwtUtil = require(cerberus.utility.jwtUtil);
const router = express.Router();

router.use("/", (req, res) => {

    // authenticate jwt
    var jwt = req.cookies.jwt;
    var payload = jwtUtil.verify(jwt);

    if (!payload) {
        res.status(500).json({ error: 'message' });
    }else {
        
    }

});

module.exports = router;