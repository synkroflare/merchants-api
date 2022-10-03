import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { LeaveRoomUseCase } from '../useCases/LeaveRoomUseCase'

export class LeaveRoomController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
      const { userId} = request.body 
      const leaveRoomUseCase = container.resolve(LeaveRoomUseCase)
      const room = await leaveRoomUseCase.execute({ userId})
     
      if (room) {
        
        return response.status(201).send(room)}

        return response.status(201).send('room is full?')

      
    } catch (error: any) {
      return response.status(400).send('error trying to Leave room')
    }
  }
}
