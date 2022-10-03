import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUserUseCase } from '../useCases/ListUserUseCase'

export class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUserUseCase = container.resolve(ListUserUseCase)
      const companies = await listUserUseCase.execute()

      return response.status(200).json(companies)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
