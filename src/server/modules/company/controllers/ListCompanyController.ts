import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCompanyUseCase } from '../useCases/ListCompanyUseCase'

export class ListCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCompanyUseCase = container.resolve(ListCompanyUseCase)
      const companies = await listCompanyUseCase.execute()

      return response.status(200).json(companies)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
