import { container } from 'tsyringe'
import { ReadDepartmentUseCase } from '../useCases/ReadDepartmentUseCase'
import { Request, Response } from 'express'

export class ReadDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const readDepartmentUseCase = container.resolve(ReadDepartmentUseCase)
      const department = await readDepartmentUseCase.execute({ id: Number(id) })

      return response.status(201).json(department)
    } catch (error: any) {
      if (error.message == 'Department does not exists') return response.status(400).send(error.message)
    }
    return response.status(400).send('unexpected error')
  }
}
