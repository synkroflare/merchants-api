import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  id: number
}

@injectable()
export class AdminWipeUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(): Promise<ICompany | null> {
    return await this.companyRepository.wipeAllData()
  }
}
