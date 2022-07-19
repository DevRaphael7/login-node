import { UserRequest } from '../../models/userRequest.model';
import { ImpLoginRepository } from './loginRepository.interface';
import fs from 'fs';

export class LoginUserRepository implements ImpLoginRepository{

    constructor() { }

    async getUser(user: UserRequest): Promise<boolean> {
        return new Promise((resolver) => {
            let checkFound = false
            fs.readFile('C:/Users/raphael2000840/Documents/node/loginApi/src/data/users.data.json', 'utf8', async (error, data) => {
                if(error){
                    console.log(error);
                    resolver(false)
                    return;
                }

                const allUsers = JSON.parse(data) as UserRequest[];
    
                allUsers.map((value: UserRequest) => {
                    if(value.name == user.name && value.password == user.password){
                        console.log('Usuário encontrado!')
                        checkFound = true;
                    }
                })

                resolver(checkFound)
            });
        })
    }
}