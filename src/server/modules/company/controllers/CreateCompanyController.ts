import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCompanyUseCase } from '../useCases/CreateCompanyUseCase'

export class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { code, name, slot1, slot2, slot3, slot4 } = request.body      
      const createCompanyUseCase = container.resolve(CreateCompanyUseCase)
      const company = await createCompanyUseCase.execute({ code, name, slot1, slot2, slot3, slot4 })
      
      return response.status(201).json(company)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
