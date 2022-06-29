import jwt from 'jsonwebtoken';
import { UserRequest } from "../models/userRequest.model";

const { TOKEN_SECRET } = process.env;

export class TokenService {

    private tokenSecretKey = TOKEN_SECRET as string

    constructor(private token: string | undefined = undefined) { }

    public genarateToken = (user: UserRequest): string => {
        return jwt.sign({
            name: user.name,
            senha: user.password,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, this.tokenSecretKey)
    }

    public validatToken = (): boolean => {
        if(!this.token) return false;
        let checkTokenValid = true;
        jwt.verify(this.token, this.tokenSecretKey, (error) => {
            if(error) checkTokenValid = false;
        })
        return checkTokenValid;
    }
}