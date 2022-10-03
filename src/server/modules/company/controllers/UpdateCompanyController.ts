import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateCompanyUseCase } from '../useCases/UpdateCompanyUseCase'

export class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const { slot1 , slot2 } = request.body
      const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)
      const company = await updateCompanyUseCase.execute({ userId: Number(userId), slot1, slot2 })

      return response.status(200).json(company)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
