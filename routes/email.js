const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.use("/", (req, res) => {

    for (let i = 0; i<1; i++) {

        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.qq.com", // 主机
                secureConnection: true, // 使用 SSL
                port: 465, // SMTP 端口
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "test@qq.com", // generated ethereal user
                    pass: "sphlbmzkfhoabcfa" // generated ethereal password
                }
            });
    
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"IT小哥哥" <test@qq.com>', // sender address
                to: 'test@qq.com', // list of receivers
                subject: 'subject', // Subject line
                text: 'text', // plain text body
                html: '<b>html次</b>' // html body
            };
    
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    }

});

module.exports = router;