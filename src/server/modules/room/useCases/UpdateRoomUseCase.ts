import { IRoom } from "server/modules/global/models/IRoom";
import { IRoomRepository, TUpdateRoomData } from "../../global/repositories/IRoomRepository";
import { injectable, inject } from "tsyringe";



@injectable()
export class UpdateRoomUseCase {
    constructor(
        @inject('RoomRepository')
        private roomRepository: IRoomRepository,
    ) {}


    async execute(data: TUpdateRoomData): Promise<IRoom | null> {
       
        const room = await this.roomRepository.update({
            usedSlots: data.usedSlots,
            activeUserSlot: data.activeUserSlot,
            status: data.status,
            activeUserId: data.activeUserId,
            slot1Name: data.slot1Name,
            slot2Name: data.slot2Name,
            slot3Name: data.slot3Name,
            slot4Name: data.slot4Name,
            slot5Name: data.slot5Name,
            slot6Name: data.slot6Name,
            slot7Name: data.slot7Name,
            slot8Name: data.slot8Name,
            slot1Id: data.slot1Id,
            slot2Id: data.slot2Id,
            slot3Id: data.slot3Id,
            slot4Id: data.slot4Id,
            slot5Id: data.slot5Id,
            slot6Id: data.slot6Id,
            slot7Id: data.slot7Id,
            slot8Id: data.slot8Id,
    })

    return room
       
    
    }
}