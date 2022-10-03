import { IRoom } from "server/modules/global/models/IRoom";
import { IRoomRepository, TLeaveRoomData, TUpdateRoomData } from "../../global/repositories/IRoomRepository";
import { injectable, inject } from "tsyringe";
import { IUser } from "server/modules/global/models/IUser";



@injectable()
export class LeaveRoomUseCase {
    constructor(
        @inject('RoomRepository')
        private roomRepository: IRoomRepository,
    ) {}


    async execute(data: TLeaveRoomData): Promise<IUser | null> { 
            
        const room = await this.roomRepository.leaveRoom({ userId: data.userId})
        const room2 = await this.roomRepository.reArrangeRoom()
        const room3 = await this.roomRepository.fixRoomActiveUserSlot()
      
        return room
    }
}