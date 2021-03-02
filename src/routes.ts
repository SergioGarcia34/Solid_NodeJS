import { Router } from "express";
import { createUserController } from "./useCases/createUser";


const router = Router();

router.post('/users', (request,respose) =>{
    return createUserController.handle(request, respose);
})


export {router}
