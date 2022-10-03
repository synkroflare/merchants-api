import { IDepartment } from '../../global/models/IDepartment'
import {
  IDepartmentRepository,
  TCreateDepartmentData,
  TFindDepartmentById,
  TFindOneDepartmentData,
} from '../../global/repositories/IDepartmentRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteDepartmentUseCase {
  constructor(
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  async execute({ id }: TFindDepartmentById): Promise<IDepartment | null> {
    const departmentAlreadyExists = await this.departmentRepository.findById({ id: Number(id) })

    if (!departmentAlreadyExists) {
      throw new Error('Department does not exists')
    }

    return await this.departmentRepository.delete({ id })
  }
}
