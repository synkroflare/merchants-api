import { ICompany } from 'server/modules/global/models/ICompany'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  userId: number
  slot1: string
  slot2: string
}

@injectable()
export class UpdateCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute({ userId, slot1, slot2 }: TRequest): Promise<ICompany | null> {
    return this.companyRepository.update({ userId, slot1, slot2 })
  }
}
