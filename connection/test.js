var express = require('express');
var router = express.Router();


const Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://root:root@localhost:3306/RPYW');

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
      email: email,
      password: password
    }
  })
  .then(result => {

    var userInfo = result[0].dataValues;
    if (userInfo) {
      res.json({
        "userInfo": userInfo,
        "code": "200",
        "msg": "success"
      });
    }else {
      res.json({
        "code": "-1",
        "msg": "error"
      });
    }

    
  })

});



module.exports = router;