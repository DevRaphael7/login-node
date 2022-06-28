import { ResponseApi } from '../../models/responseHttp.model';
import { Request, Response } from "express";
import { LoginUserRepository } from '../../repository/loginUserRepository/loginUser.repository';
import { UserRequest } from '../../models/loginRequest.model';

export class LoginUserController {

    constructor() {}
    
    public static loginUserController = async (req: Request, res: Response) => {

        const respostaBackEnd: ResponseApi<null> = {
            code: 200,
            message: "",
            operation: true
        }

        try{
            const repository: LoginUserRepository = new LoginUserRepository();
            const bodyRequest: UserRequest = req.body;

            if(repository.getUser(bodyRequest)) {
                respostaBackEnd["message"] = "Usuário logado com sucesso!"
                res.status(200).send(respostaBackEnd);
                return;
            }

            respostaBackEnd["message"] = "Usuário inválido ou não cadastrado";
            respostaBackEnd["operation"] = false;
            respostaBackEnd["code"] = 400
            res.status(400).send(respostaBackEnd)
        } catch(ex){
            console.log(ex)
            respostaBackEnd["message"] = ex as string;
            respostaBackEnd["code"] = 500;
            respostaBackEnd["operation"] = false;
            res.status(500).send(respostaBackEnd)
        }
    }
}