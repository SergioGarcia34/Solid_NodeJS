import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";



export class PostgresUserRepository implements IUserRepository {
    
    private user: User[] = [];

    async findByEmail (email: string): Promise<User>{
        
        return this.user.find( c => c.email === email);
    }

    async save(user: User): Promise<void>{
        this.user.push(user);
    }

}
