import { IRoom } from 'server/modules/global/models/IRoom'
import { basicMaterials } from '../../../../server/modules/global/repositories/Blueprints'
import { inject, injectable } from 'tsyringe'
import { IRoomRepository } from '../../global/repositories/IRoomRepository'

type TRequest = {
  code: number
  id: number
}

@injectable()
export class ListRoomUseCase {
  constructor(
    @inject('RoomRepository')
    private RoomRepository: IRoomRepository,
  ) {}

  async execute(): Promise<IRoom[] | null> {
    const list = await this.RoomRepository.findMany()
    
    if (list) return (list)

    return null
    
    
  }
}
