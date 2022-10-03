import { IUser } from 'server/modules/global/models/IUser'
import { basicMaterials } from '../../../../server/modules/global/repositories/Blueprints'
import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../global/repositories/IUserRepository'

type TRequest = {
  userId: number
}

@injectable()
export class ReadUserUseCase {
  constructor(
    @inject('UserRepository')
    private UserRepository: IUserRepository,
  ) {}

  async execute({userId }: TRequest): Promise<IUser | null> {
    const read = await this.UserRepository.findById({userId })
    
    if (read) return (read)

    return null
    
    
  }
}
