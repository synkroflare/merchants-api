import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  code: number
  name: string
  slot1: string
  slot2: string
  slot3: string
  slot4: string
}

@injectable()
export class CreateCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute({ code }: TRequest): Promise<ICompany[]> {
    this.companyRepository.deleteAll()     
    return await this.companyRepository.create({ code })
  }
}
