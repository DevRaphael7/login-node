import { users } from './../../data/users.data';
import { UserRequest } from '../../models/userRequest.model';
import { ImpLoginRepository } from './loginRepository.interface';
import fs from 'fs';

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
            fs.readFile('C:/Users/raphael2000840/Documents/node/loginApi/src/data/users.data.json', 'utf8', (error, data) => {
                if(error){
                    console.log(error);
                    resolver(false)
                    return;
                }

                const allUsers = JSON.parse(data) as UserRequest[];
                this.usersJson = allUsers;
                resolver(true);
            });
        })
    }

    public getUsersJson = (): UserRequest[] => this.usersJson;
}