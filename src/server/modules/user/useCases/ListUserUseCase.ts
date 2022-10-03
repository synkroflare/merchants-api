import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../global/repositories/IUserRepository'

@injectable()
export class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IUser[] | null> {
    return await this.userRepository.findMany()
  }
}
