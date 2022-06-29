import { NextFunction, Request, Response } from "express";
import { GetToken } from "../../models/getToken.model";
import { TokenService } from "../../service/token.service";
import jwt from 'jsonwebtoken';

export class LoginController {

    private date = new Date()
    private tokenService: TokenService;

    constructor() {
        this.tokenService = new TokenService();
    }

    public loginController = (req: Request, res: Response, next: NextFunction) => {
        const decoded = jwt.decode(this.tokenService.genarateToken()) as any
        let currentDate = `${this.date.toLocaleDateString()} - ${this.date.toLocaleTimeString()}`
        let expireTokenDate = `${this.date.toLocaleDateString()} - ${this.expireDate()}`
        res.send({
            currentDate: currentDate,
            dateTimeExpire: expireTokenDate,
            token: this.tokenService.genarateToken()
        } as GetToken)
    }

    private expireDate() {
        let time = this.date.toLocaleTimeString().split(":")
        time[0] =  (Number(time[0]) + 1).toString()
        return time.join(":")
    }
}