import { IDepartment } from '../../../../server/modules/global/models/IDepartment'
import {
  IDepartmentRepository,
  TFindDepartmentById,
} from '../../../../server/modules/global/repositories/IDepartmentRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ReadDepartmentUseCase {
  constructor(
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  async execute({ id }: TFindDepartmentById): Promise<IDepartment> {
    const departmentAlreadyExists = await this.departmentRepository.findById({ id })

    if (!departmentAlreadyExists) {
      throw new Error('Department does not exists')
    }

    return departmentAlreadyExists
  }
}
