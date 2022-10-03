import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IUserRepository, TSubActionUserData } from '../../global/repositories/IUserRepository'



@injectable()
export class Sub1ActionUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({userId}: TSubActionUserData): Promise<IUser | null> {
    return this.userRepository.subAction({userId})
  }
}
