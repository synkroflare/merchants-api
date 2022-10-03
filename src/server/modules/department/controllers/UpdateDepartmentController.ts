import { container } from 'tsyringe'
import { UpdateDepartmentUseCase } from '../useCases/UpdateDepartmentUseCase'
import { Request, Response } from 'express'
import { I18NextLanguageProvider } from '../../../../shared/providers/LanguageProvider/implementations/I18NextLanguageProvider/I18NextLanguageProvider'

export class UpdateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const languageProvider = new I18NextLanguageProvider()
    const { id } = request.params
    const { name, imageUrl, companyId } = request.body
    const updateDepartmentUseCase = container.resolve(UpdateDepartmentUseCase)

    try {
      const department = await updateDepartmentUseCase.execute({ id: Number(id), name, imageUrl, companyId })

      return response.status(201).json(department)
    } catch (error: any) {
      if (error.message == 'departmentDoesntExists') {
        return response.status(201).json('department does not exists')
      }

      if (error.message == 'departmentNameAlreadyUsed') {
        const errorMessage = languageProvider.translate('app.errors.departmentAlreadyExists', { name: name })

        return response.status(201).json(errorMessage)
      } else {
        return response.status(201).json('unexpected error')
      }
    }
  }
}
