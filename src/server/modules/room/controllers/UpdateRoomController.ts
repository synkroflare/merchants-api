import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateRoomUseCase } from '../useCases/UpdateRoomUseCase'

export class UpdateRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {usedSlots, status, activeUserId, activeUserSlot, slot1Name, slot2Name, slot3Name, slot4Name, slot5Name,
            slot6Name, slot7Name, slot8Name, slot1Id, slot2Id, slot3Id,
            slot4Id, slot5Id, slot6Id, slot7Id, slot8Id } = request.body      
      const updateRoomUseCase = container.resolve(UpdateRoomUseCase)
      const room = await updateRoomUseCase.execute({usedSlots, activeUserSlot, status, activeUserId, slot1Name, slot2Name, slot3Name, slot4Name, slot5Name,
        slot6Name, slot7Name, slot8Name, slot1Id, slot2Id, slot3Id,
        slot4Id, slot5Id, slot6Id, slot7Id, slot8Id })
      
      return response.status(201).json(room)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
