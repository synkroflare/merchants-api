import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListRoomUseCase } from '../useCases/ListRoomUseCase'

export class ListRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listRoomUseCase = container.resolve(ListRoomUseCase)
      const rooms = await listRoomUseCase.execute()
     
      if (rooms){
        return response.status(200).json(rooms)
      }
     
      return response.status(400).send("no found")

    } catch (error: any) {
      return response.status(400).send("err")
    }
  }
}
