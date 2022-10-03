import { IDepartment } from '../../../../server/modules/global/models/IDepartment'
import {
  IDepartmentRepository,
  TCreateDepartmentData,
} from '../../../../server/modules/global/repositories/IDepartmentRepository'
import { inject, injectable } from 'tsyringe'
import { debug } from 'console'

@injectable()
export class CreateDepartmentUseCase {
  constructor(
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

}
