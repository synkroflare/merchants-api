import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  userId: number
}
@injectable()
export class ListDiscoveredCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute({ userId }: TRequest): Promise<ICompany[] | null> {
    return await this.companyRepository.findManyDiscovered({userId})
  }
}
