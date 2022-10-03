import { IRoom } from '../models/IRoom'
import { IUser } from '../models/IUser'

export type TCreateRoomData = {
  code: number
  status: boolean

  slot1Name?: string
  slot2Name?: string
  slot3Name?: string
  slot4Name?: string
  slot5Name?: string
  slot6Name?: string
  slot7Name?: string
  slot8Name?: string

  slot1Id?: number
  slot2Id?: number
  slot3Id?: number
  slot4Id?: number
  slot5Id?: number
  slot6Id?: number
  slot7Id?: number
  slot8Id?: number

}

export type TUpdateRoomData = { 
  activeUserId?: number
  status: boolean
  activeUserSlot: number
  usedSlots: number

  slot1Name?: string
  slot2Name?: string
  slot3Name?: string
  slot4Name?: string
  slot5Name?: string
  slot6Name?: string
  slot7Name?: string
  slot8Name?: string

  slot1Id?: number
  slot2Id?: number
  slot3Id?: number
  slot4Id?: number
  slot5Id?: number
  slot6Id?: number
  slot7Id?: number
  slot8Id?: number
}

type TFindOneData = {
  code: number
  id: number
}

type TFindById = {
  id: number
}

type TUpdateData = {
  id: number
  name?: string
  cnpj?: string
}

type TFindByCode = {  
  code: number
}

export type TLeaveRoomData = {
  userId: number
}

export type TPassTurnData = TLeaveRoomData

export interface IRoomRepository {
  create(data: TCreateRoomData): Promise<IRoom>
  findMany(): Promise<IRoom[] | null>
  findOne(data: TFindOneData): Promise<IRoom | null>
  findByCode(data: TFindByCode): Promise<IRoom | null>
  findById(data: TFindById): Promise<IRoom | null>
  delete(data: TFindByCode): Promise<IRoom | null>
  deleteAll(): Promise<void>
  update(data: TUpdateRoomData): Promise<IRoom | null>
  enterRoom(): Promise<IRoom | null>
  leaveRoom(data: TLeaveRoomData): Promise<IUser | null>
  passTurn(data: TPassTurnData): Promise<IRoom | null>
  reArrangeRoom(): Promise<void>
  fixRoomActiveUserSlot(): Promise<void>
}
