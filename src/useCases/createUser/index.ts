//Objeto necessário para vincular as interfaces as suas implemntações reais.
import {CreateUserUseCAse} from './CreateUserUseCase';
import {CreateUserController} from './CreateUserController';
import { PostgresUserRepository } from '../../repositories/Implementations/PostgresUserRepository';
import { MailtrapMailProvider } from '../../Providers/Implementations/MailTrapMailProvider';


const postgresUserRepository = new PostgresUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserCase = new CreateUserUseCAse(
     postgresUserRepository, mailtrapMailProvider
     )

const createUserController = new CreateUserController(
    createUserCase
)      

export {createUserCase,createUserController}
