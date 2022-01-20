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


export const sendEmail = () => {

    try {
        transporter.sendMail({
            from: '"Sandra Vázquez 👻" <sandrvazquez@gmail.com>', // sender address
            to: "sandrvazquez@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log('Message sent')
        return true;
    } catch (error) {
        emailStatus = error;
        return res.status(400)
    }

}