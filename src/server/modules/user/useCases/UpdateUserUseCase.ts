import { IUser } from 'server/modules/global/models/IUser'
import { inject, injectable } from 'tsyringe'
import { IUserRepository, TUpdateUserData } from '../../global/repositories/IUserRepository'



@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({  gender, avatar,location, actions, userId, name, roomId,
    BPD1,
    BPD2,
    BPD3,
    BPD4,
    BPD5,
    BPD6,
    BPD7,
    BPD8,
    BPD9,
   BPD10,
   BPD11,
   BPD12,
   BPD13,
   BPD14,
   BPD15,
   BPD16,
   BPD17,
   BPD18,
   BPD19,
   BPD20,
   BPD21,
   BPD22,
   BPD23,
   BPD24,
   BPD25,
   BPD26,
   BPD27,
   BPD28,
   BPD29,
   BPD30 }: TUpdateUserData): Promise<IUser | null> {
    return this.userRepository.update({ gender, avatar,location, actions, userId, name, roomId,
      BPD1,
      BPD2,
      BPD3,
      BPD4,
      BPD5,
      BPD6,
      BPD7,
      BPD8,
      BPD9,
     BPD10,
     BPD11,
     BPD12,
     BPD13,
     BPD14,
     BPD15,
     BPD16,
     BPD17,
     BPD18,
     BPD19,
     BPD20,
     BPD21,
     BPD22,
     BPD23,
     BPD24,
     BPD25,
     BPD26,
     BPD27,
     BPD28,
     BPD29,
     BPD30 })
  }
}
