import { UserRequest } from '../../models/userRequest.model';
import { ImpLoginRepository } from './loginRepository.interface';
import fs from 'fs';
import path from 'path';

export class LoginUserRepository implements ImpLoginRepository {

    private usersJson: UserRequest[] = [];

    constructor() { }

    async getUser(user: UserRequest): Promise<boolean> {
        if(!await this.getUserByFileSystem()) return false;
        let checkFound = false;
        const allUsers = this.getUsersJson()
        allUsers.map((value: UserRequest) => {
            if(value.name == user.name && value.password == user.password){
                console.log('Usuário encontrado!')
                checkFound = true;
            }
        })

        return checkFound;
    }

    public getUserByFileSystem(): Promise<boolean> {
        return new Promise((resolver) => {
            try{
                fs.readFile(path.join('src/data/users.data.json'), 'utf8', (error, data) => {
                    if(error){
                        console.log(error);
                        resolver(false)
                        return;
                    }

                    if(data.length == 0) data = "[ ]";
                    
                    const allUsers = JSON.parse(data) as UserRequest[];
                    console.log('Todos os usuários: ' + allUsers)
                    this.usersJson = allUsers;
                    resolver(true);
                });
            } catch(ex) {
                console.log(ex)
                resolver(false)
            }
        })
    }

    public getUsersJson = (): UserRequest[] => this.usersJson;
}