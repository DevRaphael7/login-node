import { RegisterUserRepository } from './../../repository/registerUserRepository/registerUser.repository';
import { UserRequest } from './../../models/userRequest.model';
import { Request, Response } from 'express';
import { ResponseApi } from '../../models/responseHttp.model';

export class RegisterUserController {

    private repository: RegisterUserRepository;

    constructor() {
        this.repository = new RegisterUserRepository();
    }

    public registerNewUser = async(req: Request, res: Response) => {
        const body: UserRequest = req.body;
        
        const checkRegisterSucess = await this.repository.addUser(body)

        const respostaBackEnd: ResponseApi<null> = {
            code: 200,
            message: "Usuário cadastrado",
            operation: true
        }

        if(checkRegisterSucess) {
            res.status(200).json(respostaBackEnd)
        } else {
            respostaBackEnd.code = 500;
            respostaBackEnd.message = "Falha em salvar usuário";
            respostaBackEnd.operation = false;
            res.status(500).json(respostaBackEnd);
        }
    }
}