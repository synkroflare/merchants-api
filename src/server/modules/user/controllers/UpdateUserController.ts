import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserUseCase } from '../useCases/UpdateUserUseCase'

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params
      const {  location, actions, name, roomId,
        BPD1,
        BPD2,
        BPD3,
        BPD4,
        BPD5,
        BPD6,
        BPD7,
        BPD8,
        BPD9,
       BPD10,
       BPD11,
       BPD12,
       BPD13,
       BPD14,
       BPD15,
       BPD16,
       BPD17,
       BPD18,
       BPD19,
       BPD20,
       BPD21,
       BPD22,
       BPD23,
       BPD24,
       BPD25,
       BPD26,
       BPD27,
       BPD28,
       BPD29,
       BPD30 } = request.body
      const updateUserUseCase = container.resolve(UpdateUserUseCase)
      const user = await updateUserUseCase.execute({ actions: Number(actions),name, roomId: Number(roomId), userId: Number(userId),
        location,
        BPD1,
        BPD2,
        BPD3,
        BPD4,
        BPD5,
        BPD6,
        BPD7,
        BPD8,
        BPD9,
       BPD10,
       BPD11,
       BPD12,
       BPD13,
       BPD14,
       BPD15,
       BPD16,
       BPD17,
       BPD18,
       BPD19,
       BPD20,
       BPD21,
       BPD22,
       BPD23,
       BPD24,
       BPD25,
       BPD26,
       BPD27,
       BPD28,
       BPD29,
       BPD30  })

      return response.status(200).json(user)
    } catch (error: any) {
      return response.status(400).send(error.message)
    }
  }
}
