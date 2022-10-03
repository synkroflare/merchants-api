import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CheckUserUseCase } from '../useCases/CheckUserUseCase'

export class CheckUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const checkUserUseCase = container.resolve(CheckUserUseCase)
      const user = await checkUserUseCase.execute({  userId: Number(userId)  })
     
      if (user){
        return response.status(200).send(true)
      }
     
      return response.status(200).send(false)

    } catch (error: any) {
      return response.status(400).send("error")
    }
  }
}
