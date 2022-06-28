import { UserRequest } from '../../models/loginRequest.model';
import { ResponseApi } from '../../models/responseHttp.model';
import { Request, Response } from "express";
import { User } from "../../models/User.model";

export class LoginUserController {
    public static loginUserController = async (req: Request, res: Response) => {
        try{
            res.send({
                code: 200,
                message: 'Usuário logado com sucesso!',
                operation: true
            } as ResponseApi<null>);
        } catch(ex){
            console.log(ex)
            res.send({
                code: 400,
                message: ex,
                operation: false
            } as ResponseApi<null>)
        }
    }
}