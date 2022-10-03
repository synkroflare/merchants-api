import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateCompanyUseCase } from '../useCases/UpdateCompanyUseCase'

export class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { name, cnpj } = request.body
      const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)
      const company = await updateCompanyUseCase.execute({ id: Number(id), name, cnpj })

      return response.status(200).json(company)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
