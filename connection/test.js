var express = require('express');
var router = express.Router();


const Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://root:root@localhost:3306/RPYW');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

router.post('/login', function(req, res){

  var param = req.body
  var email = param.email;
  var password = param.password;

  const User = sequelize.define('core_users', {
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
  },{
    timestamps: false
  });
  
  User.findAll({
    where: {
      email: email
    }
  })
  .then(result => {
    var user = result[0].dataValues;
    if (user.password == password) {
      var msg = {
        "code": 200,
        "tip": "success"
      }
      return msg;
    }
  })

});



module.exports = router;