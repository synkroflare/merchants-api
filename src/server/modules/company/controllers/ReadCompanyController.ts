import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ReadCompanyUseCase } from '../useCases/ReadCompanyUseCase'

export class ReadCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
      const { userId, slot1, slot2 } = request.params
      const readCompanyUseCase = container.resolve(ReadCompanyUseCase)
      
      const company = await readCompanyUseCase.execute({  userId: Number(userId), slot1, slot2  })
     
      if (company && company[1]) console.log('company1 ='+ company[1])
      if (company && !company[1]) console.log('company1 null') 
      if (!company) console.log ('company null')
          
      if (company && company[1] == 1){
        return response.status(200).json(company[0])
      }
      if (company && company[1] == 0){
        return response.status(200).json(company[0])
      }
     
      return response.status(200).send("no found")

    } catch (error: any) {
      return response.status(400).send("err")
    }
  }
}
