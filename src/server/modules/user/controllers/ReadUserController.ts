import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ReadUserUseCase } from '../useCases/ReadUserUseCase'

export class ReadUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const readUserUseCase = container.resolve(ReadUserUseCase)
      const user = await readUserUseCase.execute({  userId: Number(userId)  })
     
      if (user){
        return response.status(200).json(user)
      }
     
      return response.status(200).send(user)

    } catch (error: any) {
      return response.status(400).send("err")
    }
  }
}
