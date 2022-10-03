import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRoomUseCase } from '../useCases/CreateRoomUseCase'

export class CreateRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {status, code, slot1Name, slot2Name, slot3Name, slot4Name, slot5Name,
        slot6Name, slot7Name, slot8Name, slot1Id, slot2Id, slot3Id,
        slot4Id, slot5Id, slot6Id, slot7Id, slot8Id } = request.body      
      const createRoomUseCase = container.resolve(CreateRoomUseCase)
      const user = await createRoomUseCase.execute({status, code, slot1Name, slot2Name, slot3Name, slot4Name, slot5Name,
        slot6Name, slot7Name, slot8Name, slot1Id, slot2Id, slot3Id,
        slot4Id, slot5Id, slot6Id, slot7Id, slot8Id })
      
      return response.status(201).json(user)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
