const express = require("express");
const router = express.Router();
const promiseHandler = require(cerberus.filters.promiseHandler);
const loginCtrl = require(cerberus.controllers.loginCtrl);

router.use("/", (req, res) => {

    promiseHandler(res, Promise.resolve()
        .then(() => {
            return loginCtrl.authenticate(req.body)
                .catch(err => {
                    throw new Error(err);    
                })
        })
        .then(result => {
            if (!result) {
                throw new Error("Incorrect email or password!")
            } else {
                res.cookie("jwt-cerberus", result.jwt);
                return result;
            }
        })
    );

});

module.exports = router;