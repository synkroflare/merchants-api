import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SetUserLocationUseCase } from '../useCases/SetUserLocationUseCase'

export class SetUserLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
      const setUserLocationUseCase = container.resolve(SetUserLocationUseCase)
      const user = await setUserLocationUseCase.execute()

      return response.status(200).json(user)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
