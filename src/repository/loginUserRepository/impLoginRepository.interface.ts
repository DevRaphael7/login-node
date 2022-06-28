import { UserRequest } from '../../models/loginRequest.model';

export interface ImpLoginRepository{
    
    getUser(user: UserRequest): boolean;
}