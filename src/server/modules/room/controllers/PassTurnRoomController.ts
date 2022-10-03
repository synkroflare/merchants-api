import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { PassTurnRoomUseCase } from '../useCases/PassTurnRoomUseCase'

export class PassTurnRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
      const { userId} = request.body 
      const passTurnRoomUseCase = container.resolve(PassTurnRoomUseCase)
      const room = await passTurnRoomUseCase.execute({ userId})
     
      if (room) {
        
        return response.status(201).send(room)}

        return response.status(201).send('room is full?')

      
    } catch (error: any) {
      return response.status(400).send('error trying to PassTurn')
    }
  }
}
