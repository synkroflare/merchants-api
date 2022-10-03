import { IRoom } from "server/modules/global/models/IRoom";
import { IRoomRepository, TUpdateRoomData } from "../../global/repositories/IRoomRepository";
import { injectable, inject } from "tsyringe";



@injectable()
export class EnterRoomUseCase {
    constructor(
        @inject('RoomRepository')
        private roomRepository: IRoomRepository,
    ) {}


    async execute(): Promise<IRoom | null> { 
            
        const room = await this.roomRepository.enterRoom()
      
        return room
    }
}