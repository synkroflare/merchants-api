import { IRoom } from "server/modules/global/models/IRoom";
import { IRoomRepository, TPassTurnData, TUpdateRoomData } from "../../global/repositories/IRoomRepository";
import { injectable, inject } from "tsyringe";
import { IUser } from "server/modules/global/models/IUser";



@injectable()
export class PassTurnRoomUseCase {
    constructor(
        @inject('RoomRepository')
        private roomRepository: IRoomRepository,
    ) {}


    async execute(data: TPassTurnData): Promise<IRoom | null> { 
            
        const user = await this.roomRepository.passTurn({ userId: data.userId})
      
        return user
    }
}