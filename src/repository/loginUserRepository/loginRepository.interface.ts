import { UserRequest } from '../../models/userRequest.model';

export interface ImpLoginRepository{
    getUser(user: UserRequest): boolean;
}