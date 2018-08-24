var self = {

    entity: "userEntity",

    login: function(params) {
        return cerberus.dbPool[self.entity].findAll({
            where: params
        })
    }
}

module.exports = self