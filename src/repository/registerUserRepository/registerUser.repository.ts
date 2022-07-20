import { UserRequest } from "../../models/userRequest.model";
import { ImpRegisterUserRepository } from "./registerUserRepository.interface";
import fs from 'fs';
import path from 'path';
import { LoginUserRepository } from "../loginUserRepository/loginUser.repository";

export class RegisterUserRepository implements ImpRegisterUserRepository {

    private loginRepository: LoginUserRepository;

    constructor() {
        this.loginRepository = new LoginUserRepository();
    }

    public async addUser(user: UserRequest): Promise<boolean> {
        if(!await this.loginRepository.getUserByFileSystem()) return false;

        const users = this.loginRepository.getUsersJson();
        console.log('Usuários: ' + users)
        users.push(user);

        return this.saveUserInFileSystem(users);
    }

    private saveUserInFileSystem(users: UserRequest[]): boolean {
        try{
            fs.writeFileSync(
                path.join('src/data/users.data.json'), 
                JSON.stringify(users, null, '\t')
            )
            return true;
        } catch(ex) {
            console.log(ex);
            return false;
        }
    }

    criarDiretorio() {
        fs.mkdir(path.join('/Users/raphael2000840/Documents/node/loginApi/src/data/', 'db'), (err) => {
            if(err){
                console.log(err)
                return;
            }

            console.log('Diretório criado com sucesso!')
        })
    }

}