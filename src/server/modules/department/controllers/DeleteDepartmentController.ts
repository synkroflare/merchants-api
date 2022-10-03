import { container } from 'tsyringe'
import { DeleteDepartmentUseCase } from '../useCases/DeleteDepartmentUseCase'
import { Request, Response } from 'express'

export class DeleteDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const deleteDepartmentUseCase = container.resolve(DeleteDepartmentUseCase)
      const department = await deleteDepartmentUseCase.execute({ id: Number(id) })

      return response.status(201).json(department)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
