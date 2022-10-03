import { container } from 'tsyringe'
import { CreateDepartmentUseCase } from '../useCases/CreateDepartmentUseCase'
import { Request, Response } from 'express'
import { I18NextLanguageProvider } from '../../../../shared/providers/LanguageProvider/implementations/I18NextLanguageProvider/I18NextLanguageProvider'

export class CreateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response | void> {
    const { points, reasearches, companyId } = request.body
    const languageProvider = new I18NextLanguageProvider()
    const createDepartmentUseCase = container.resolve(CreateDepartmentUseCase)
    try {
      
    } catch (error: any) {
      if (error.message == 'departmentAlreadyExists') {
        const errorMessage = languageProvider.translate('app.errors.departmentAlreadyExists', { name: name })

        return response.status(201).json(errorMessage)
      }
      if (error.message == 'departmentNameNull') {
        return response.status(201).json('department name null')
      }
      if (error.message == 'departmentCompanyIdNull') {
        return response.status(201).json('company id null')
      }
      return response.status(201).json('unexpected error')
    }
  }
}
