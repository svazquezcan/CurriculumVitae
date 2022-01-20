import { transporter } from '../config/mailer';
import { Request, Response } from 'express';

class ContactController{
    static sendForm = async (req: Request, res: Response) => {
        let emailStatus = 'OK';
         // send mail with defined transport object
        try {
            await transporter.sendMail({
                from: '"Sandra Vázquez 👻" <sandrvazquez@gmail.com>', // sender address
                to: "sandrvazquez@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });
        } catch (error) {
            emailStatus = error;
            return res.status(400)
        }
    }
   
  
}

export default ContactController;