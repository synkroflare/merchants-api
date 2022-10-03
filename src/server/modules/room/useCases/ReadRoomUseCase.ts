import { IRoom } from 'server/modules/global/models/IRoom'
import { basicMaterials } from '../../../../server/modules/global/repositories/Blueprints'
import { inject, injectable } from 'tsyringe'
import { IRoomRepository } from '../../global/repositories/IRoomRepository'

type TRequest = {
  code: number
  id: number
}

@injectable()
export class ReadRoomUseCase {
  constructor(
    @inject('RoomRepository')
    private roomRepository: IRoomRepository,
  ) {}

  async execute({code, id }: TRequest): Promise<IRoom | null> {
    const read = await this.roomRepository.findOne({code ,id })
    
    if (read) return (read)

    return null
    
    
  }
}
