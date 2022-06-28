import { users } from "../../data/users.data";
import { UserRequest } from "../../models/userRequest.model";
import { ImpRegisterUserRepository } from "./registerUserRepository.interface";

export class RegisterUserRepository implements ImpRegisterUserRepository {

    constructor() {}

    public async addUser(user: UserRequest): Promise<void> {
        users.push(user)
    }

}