const Sequelize = require("sequelize");

var userEntity = function (sequelize) {
    var user = sequelize.define('core_users', {
        cu_uuid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cu_guid: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
    }, 
    {
        timestamps: false
    });

    return user;

}

module.exports = userEntity;