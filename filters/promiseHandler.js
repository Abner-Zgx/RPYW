var success = {
    "msg": "success",
    "code": "0"
}

var error = {
    "msg": "error",
    "code": "-1"
}

var promiseHandler = function(res, Promise) {
    Promise.then(result => {
        success["data"] = result;
        res.json(success);
    })
    .catch(err => {
        res.json(error);
    })
}

module.exports = promiseHandler