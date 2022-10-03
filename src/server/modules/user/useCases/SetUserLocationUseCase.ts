import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../global/repositories/IUserRepository'



@injectable()
export class SetUserLocationUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IUser | null> {
    return this.userRepository.setUserLocations()
  }
}
