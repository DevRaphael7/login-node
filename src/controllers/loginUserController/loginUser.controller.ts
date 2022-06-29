import { ResponseApi } from '../../models/responseHttp.model';
import { Request, Response } from "express";
import { LoginUserRepository } from '../../repository/loginUserRepository/loginUser.repository';
import { UserRequest } from '../../models/userRequest.model';
import { TokenService } from '../../service/token.service';

export interface GetToken {
    token: string;
}

export class LoginUserController {

    constructor() {}
    
    public static loginUserController = async (req: Request, res: Response) => {

        const tokenService = new TokenService();

        const respostaBackEnd: ResponseApi<GetToken> = {
            code: 400,
            message: "",
            operation: false
        }

        try{
            const repository: LoginUserRepository = new LoginUserRepository();
            const bodyRequest: UserRequest = req.body;

            if(repository.getUser(bodyRequest)) {
                respostaBackEnd["code"] = 200;
                respostaBackEnd["operation"] = true
                respostaBackEnd["data"] = { token: tokenService.genarateToken(bodyRequest) }
                respostaBackEnd["message"] = "Usuário logado com sucesso!"
                res.status(200).json(respostaBackEnd);
                return;
            }

            respostaBackEnd["message"] = "Usuário inválido ou não cadastrado";
            res.status(400).json(respostaBackEnd)
        } catch(ex){
            console.log(ex)
            respostaBackEnd["message"] = ex as string;
            respostaBackEnd["code"] = 500;
            respostaBackEnd["operation"] = false;
            res.status(500).json(respostaBackEnd)
        }
    }
}