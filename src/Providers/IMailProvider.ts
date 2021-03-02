export interface IAdress{
    name: string;
    email: string;
}


export interface IMessage {
    to: string;
    from: string;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage ): Promise<void>;
}
