import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AdminWipeUseCase } from '../useCases/AdminWipeUseCase'

export class AdminWipeController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const adminWipeUseCase = container.resolve(AdminWipeUseCase)
      const companyDeleted = await adminWipeUseCase.execute()

      return response.status(200).json(companyDeleted)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
