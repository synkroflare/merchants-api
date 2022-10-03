import { container } from 'tsyringe'
import { ListDepartmentUseCase } from '../useCases/ListDepartmentUseCase'
import { Request, Response } from 'express'

export class ListDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listDepartmentUseCase = container.resolve(ListDepartmentUseCase)
      const departments = await listDepartmentUseCase.execute()

      return response.status(201).json(departments)
    } catch (error: any) {
      if (error.message == 'No Department Found') return response.status(400).send(error.message)
      else return response.status(400).send('unexpected error')
    }
  }
}
