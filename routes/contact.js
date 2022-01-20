var express = require('express')
var router = express.Router()
const path = require('path');
const nodemailer = require("nodemailer");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
})


//Setting form to be receive in my inbox email 
router.post('/', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
        <li>Name: ${req.body.user_name}</li>
        <li>Email: ${req.body.user_email}</li>
        <li>Subject: ${req.body.user_subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.user_message}</p>
    `

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: 'sandrvazquez@gmail.com', // generated ethereal user
        pass: 'spmgwlizijqfgmqr', // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    transporter.verify().then(() =>{
        console.log("Ready to send emails");
    })

    try {
        transporter.sendMail({
            from: '"Sandra Vázquez 👻"', // sender address
            to: "sandrvazquez@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: output, // html body
        });

        console.log('Message sent')
    } catch (error) {
        emailStatus = error;
        return res.status(400)
    }

});


module.exports = router