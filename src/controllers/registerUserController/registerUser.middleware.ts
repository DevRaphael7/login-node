import { UserRequest } from '../../models/userRequest.model';
import { Request, Response, NextFunction } from 'express';
import { ResponseApi } from '../../models/responseHttp.model';

export class RegisterUserMiddleware {

    public static validateBodyRequest = async (req: Request, res: Response, next: NextFunction) => {

        let response: ResponseApi<null> = {
            code: 400,
            message: "",
            operation: false
        }

        try {
            const user: UserRequest = req.body;
            if(!user.name) {
                response["message"] = "Usuário não informado"
                res.status(400).json(response)
                return
            } else if(!user.email) {
                response["message"] = "E-mail não informado"
                res.status(400).json(response)
                return
            } else if(!user.password) {
                response["message"] = "Senha não informada"
                res.status(400).json(response)
                return
            } else if(!user.age) {
                response["message"] = "Obrigatório informar a idade";
                res.status(400).json(response)
                return
            }
            next()
        } catch(ex) {
            console.log(ex)
            response["message"] = ex as string;
            res.status(400).json(response)
        }
    }
}