import { IDepartment } from '../../../../server/modules/global/models/IDepartment'
import {
  IDepartmentRepository,
  TFindDepartmentById,
} from '../../../../server/modules/global/repositories/IDepartmentRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListDepartmentUseCase {
  constructor(
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  async execute(): Promise<IDepartment[]> {
    const departmentAlreadyExists = await this.departmentRepository.findMany()

    if (!departmentAlreadyExists) {
      throw new Error('No Department Found')
    }

    return departmentAlreadyExists
  }
}
