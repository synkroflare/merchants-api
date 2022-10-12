import { IUser } from "server/modules/global/models/IUser";
import { IUserRepository, TCreateUserData } from "../../global/repositories/IUserRepository";
import { injectable, inject } from "tsyringe";



@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}


    async execute({name, roomId, userId, gender, avatar}: TCreateUserData): Promise<IUser> {
        
        const user = await this.userRepository.create({
            name, roomId, userId, gender, avatar
    })

    return user
       
    
    }
}