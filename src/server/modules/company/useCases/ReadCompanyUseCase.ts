import { ICompany } from 'server/modules/global/models/ICompany'
import { basicMaterials } from '../../../../server/modules/global/repositories/Blueprints'
import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../global/repositories/ICompanyRepository'

type TRequest = {
  userId: number
  slot1: string
  slot2: string
 
}

@injectable()
export class ReadCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute({userId, slot1, slot2 }: TRequest) {
   
    const read = await this.companyRepository.findOne({userId, slot1, slot2 })
    
    let value = 1    
    if (read && read.length != 0) {
      
      await this.companyRepository.update({userId, slot1, slot2 })
      
      return Promise.resolve([read, value])
    }
  
    const readAgain = await this.companyRepository.findPartials({slot1, slot2 })
    value = 0
    if (readAgain) {return Promise.resolve([readAgain, value])}

    return null
    
  }
}
