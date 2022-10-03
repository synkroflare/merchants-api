import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  id: number
  name: string
  cnpj: string
}

@injectable()
export class UpdateCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute({ id, name, cnpj }: TRequest): Promise<ICompany | null> {
    return this.companyRepository.update({ id, name, cnpj })
  }
}
