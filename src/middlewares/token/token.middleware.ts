import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { ResponseApi } from "../../models/responseHttp.model";
import { TokenService } from "../../service/token.service";

export class TokenMiddleware {

    private static respostaBackEnd: ResponseApi<null> = {
        code: 401,
        message: "Não autorizado",
        operation: false
    }

    public static validateToken(req: Request, res: Response, next: NextFunction) {
        try{
            const bearerToken = req.headers.authorization;

            const tokenService = new TokenService(bearerToken);

            if(!tokenService.validatToken()){
                res.status(401).json(TokenMiddleware.respostaBackEnd);
                return;
            }

            next();
        } catch(ex) {
            const response = TokenMiddleware.respostaBackEnd
            response.code = 500;
            res.status(500).json(response);
        }
    }

}