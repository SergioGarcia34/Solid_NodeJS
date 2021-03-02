import { IMailProvider, IMessage } from "../IMailProvider";
import {createTransport}from "nodemailer";
import {Mail} from 'nodemailer/lib/nodemailer';

export class MailtrapMailProvider implements IMailProvider{

    private transporter: Mail;    

    constructor(){

         this.transporter = createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "f5462914ef02a7",
              pass: "1e6f9e951ac98e"
            }
          });
    }

    async sendMail(message: IMessage) : Promise<void> { 
        await this.transporter.sendMail({
            to: message.to,
            from: message.from,
            subject: message.subject,
            html: message.body
        }
        );    
    }
}
