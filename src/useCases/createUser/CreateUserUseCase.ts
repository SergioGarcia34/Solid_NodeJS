import { User } from "../../entities/User";
import { IMailProvider } from "../../Providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";


export class CreateUserUseCAse {
    
    constructor(
        //Cria um Injeção de dependencia (Similar ao Core) Poderia criar um atributo private e passar o valor pra
        // ele também.
        private userRepository: IUserRepository,
        private mailProvider: IMailProvider
    ){

    }
    async execute( data: ICreateUserRequestDTO ){
        
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists.')
        }

        const user = new User(data);
        await this.userRepository.save(user);
        console.log(data.email)
        await this.mailProvider.sendMail({
            to:  data.email,
            from: '34sergio.garcia@gmail.com',
            subject: 'Bem vindo a plataforma!',
            body: '<p>oi</p>'
        })

    }
}
