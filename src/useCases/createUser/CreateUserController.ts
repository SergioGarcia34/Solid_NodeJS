import { CreateUserUseCAse } from "./CreateUserUseCase"
import {Response, Request} from "express";
 
 
 export class CreateUserController {

    constructor( private createUserUseCase: CreateUserUseCAse){
      
    }

    async handle(request: Request, response: Response): Promise<Response>{

        const {email, name, password} = request.body
        
    try {
        await this.createUserUseCase.execute({
            email, name, password
        })
        return response.status(201).send();
    }
    catch(err) {
        return response.status(400).json({
            message: err.message || 'Unexpected Error.'
        })
    }
    
    }


 }
