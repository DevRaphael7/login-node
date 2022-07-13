import { UserRequest } from '../../models/userRequest.model';
import { ImpLoginRepository } from './loginRepository.interface';
import { users } from '../../data/users.data';

export class LoginUserRepository implements ImpLoginRepository{

    constructor() { }

    getUser(user: UserRequest): boolean {
        const checkFoundUser = users.filter(value => 
            (user.name == value.name || user.email == value.email) 
            && user.password == value.password
        )

        if(checkFoundUser.length > 0) return true;
        return false;
    }
}