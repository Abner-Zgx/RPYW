const Sequelize = require("sequelize");

var dbUtil = {
    loadDB: function(dbURL) {

        const db = {};
        const sequelize = new Sequelize(dbURL);

        for (i in cerberus.models) {
            db[i] = require(cerberus.models[i])(sequelize);
        }

        return db;
    }
}

module.exports = dbUtil