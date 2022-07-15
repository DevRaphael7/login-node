import jwt from 'jsonwebtoken';
import { UserRequest } from "../models/userRequest.model";

const { TOKEN_SECRET } = process.env;

export class TokenService {

    private tokenSecretKey = TOKEN_SECRET as string

    constructor(private token: string | undefined = undefined) { }

    public genarateToken = (): string => {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, this.tokenSecretKey)
    }

    public validatToken = (): boolean => {
        if(!this.token) return false;

        const tokenWithoutBearer = this.token.split("Bearer ");

        if(tokenWithoutBearer.length == 1) return false;
        console.log('Bearer: ' + tokenWithoutBearer[1])
        let checkTokenValid = true;
        jwt.verify(tokenWithoutBearer[1], this.tokenSecretKey, (error) => {
            if(error) checkTokenValid = false;
        })
        return checkTokenValid;
    }
}