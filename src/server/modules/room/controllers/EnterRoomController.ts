import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { EnterRoomUseCase } from '../useCases/EnterRoomUseCase'

export class EnterRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
         
      const enterRoomUseCase = container.resolve(EnterRoomUseCase)
      const room = await enterRoomUseCase.execute()
     
      if (room) {
        
        return response.status(201).send(room)}

        return response.status(201).send('room is full?')

      
    } catch (error: any) {
      return response.status(400).send('error trying to enter room')
    }
  }
}
