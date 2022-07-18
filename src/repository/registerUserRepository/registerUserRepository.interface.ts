import { UserRequest } from '../../models/userRequest.model';

export interface ImpRegisterUserRepository {
    addUser(user: UserRequest): Promise<void>;
}