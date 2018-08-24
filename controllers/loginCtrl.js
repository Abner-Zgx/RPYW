const loginService = require(cerberus.services.loginService);
const jwtUtil = require(cerberus.utils.jwtUtil);

var self = {

    authenticate: function (params) {
        return Promise.resolve().then(() => {
            return loginService.login(params);
        })
        .then(result => {
            if (result.length == 0) {
                throw new Error("Incorrect email or password!");
            }else {
                var jwtObj = result[0].dataValues;
                jwt = jwtUtil.encrypt(jwtObj);
                jwtObj.jwt = jwt;
                return jwtObj
            }
        });
    }
}

module.exports = self;