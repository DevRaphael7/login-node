import { Response, Request, NextFunction } from 'express'
import { UserRequest } from '../../models/userRequest.model';
import { ResponseApi } from '../../models/responseHttp.model';

export class LoginUserMiddleware {

    public static validateBody = (req: Request, res: Response, next: NextFunction) => {

        const response: ResponseApi<null> = {
            message: "",
            code: 400,
            operation: false
        }

        try{
            const data: UserRequest = req.body;
            if(!(data.name || data.email)){
                response["message"] = "Usuário não informado!"
                res.status(response.code).json(response)
                return
            } else if(!data.password) {
                response["message"] = "Senha não informada"
                res.status(response.code).json(response)
                return
            }
            next()
        } catch(ex) {
            console.log(ex)
            response["code"] = 500;
            response["message"] = ex as string;
            res.status(response.code).json(response)
        }   

    }
}