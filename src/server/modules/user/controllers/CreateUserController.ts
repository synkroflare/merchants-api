import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {name , roomId, userId, gender, avatar} = request.body      
      const createUserUseCase = container.resolve(CreateUserUseCase)
      const user = await createUserUseCase.execute({name, roomId, userId, gender, avatar })
      
      return response.status(201).json(user)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
