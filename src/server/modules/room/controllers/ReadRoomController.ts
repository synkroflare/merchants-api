import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ReadRoomUseCase } from '../useCases/ReadRoomUseCase'

export class ReadRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { code , id } = request.params
      const readRoomUseCase = container.resolve(ReadRoomUseCase)
      const room = await readRoomUseCase.execute({  code: Number(code), id: Number(id)  })
     
      if (room){
        return response.status(200).json(room)
      }
     
      return response.status(400).send("no found")

    } catch (error: any) {
      return response.status(400).send("err")
    }
  }
}
