import { NextFunction, Request, Response } from "express";
import { ResponseApi } from "../../models/responseHttp.model";

interface Authorization {
    user: string;
    password: string;
}

export class LoginMiddleware {
    
    private static respostaBackEnd: ResponseApi<null> = {
        code: 401,
        message: "Não autorizado",
        operation: false
    }

    public static validateAuthorized(req: Request, res: Response, next: NextFunction) {
        const bodyRequest: Authorization = req.body;

        if(!bodyRequest){
            res.status(401).json(LoginMiddleware.respostaBackEnd)
            return;
        }

        if(bodyRequest.user != '@raphael' || bodyRequest.password != '123'){
            res.status(401).json(LoginMiddleware.respostaBackEnd)
            return;
        }

        next();
    }   
}