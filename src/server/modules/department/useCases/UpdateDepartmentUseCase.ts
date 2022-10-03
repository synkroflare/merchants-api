import { IDepartment } from '../../global/models/IDepartment'
import { IDepartmentRepository, TUpdateDepartmentData } from '../../global/repositories/IDepartmentRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateDepartmentUseCase {
  constructor(
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  async execute({ id, imageUrl, name, companyId }: TUpdateDepartmentData): Promise<IDepartment | null> {
    const departmentExists = await this.departmentRepository.findById({ id: Number(id) })

    if (!departmentExists) {
      throw new Error('departmentDoesntExists')
    }

    const departmentNameAlreadyUsed = await this.departmentRepository.findByNameCompany({ name, companyId })

   

    return await this.departmentRepository.update({ id, imageUrl, name, companyId })
  }
}
