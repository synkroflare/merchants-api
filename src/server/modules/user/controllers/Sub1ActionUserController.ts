import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { Sub1ActionUserUseCase } from '../useCases/Sub1ActionUserUseCase'

export class Sub1ActionUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const sub1ActionUserUseCase = container.resolve(Sub1ActionUserUseCase)
      const user = await sub1ActionUserUseCase.execute({ userId: Number(userId) })

      return response.status(200).json(user)
    } catch (error: any) {
      return response.status(400).send('error subaction')
    }
  }
}
