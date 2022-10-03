import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListDiscoveredCompanyUseCase } from '../useCases/ListDiscoveredCompanyUseCase'

export class ListDiscoveredCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const listDiscoveredCompanyUseCase = container.resolve(ListDiscoveredCompanyUseCase)
      const companies = await listDiscoveredCompanyUseCase.execute( { userId: Number(userId) })
      
      return response.status(200).json(companies)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
