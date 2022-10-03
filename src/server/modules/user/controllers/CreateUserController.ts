import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {name , roomId, userId} = request.body      
      const createUserUseCase = container.resolve(CreateUserUseCase)
      const user = await createUserUseCase.execute({name, roomId, userId })
      
      return response.status(201).json(user)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
