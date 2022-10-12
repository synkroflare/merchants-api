import { IUser } from '../models/IUser'

export type TCreateUserData = {
  gender: string
  avatar?: string
  name: string
  roomId: number
  userId: number
}

type TFindOneData = {
  name: string
  roomId: number
}

type TFindById = {
  userId: number
}

export type TUpdateUserData = {
  gender: string
  avatar: string
  actions: number
  roomId: number
  name: string
  userId: number
  location: string
  BPD1: boolean
  BPD2: boolean
 BPD3: boolean
  BPD4: boolean
 BPD5: boolean
 BPD6: boolean
 BPD7: boolean
  BPD8: boolean
  BPD9: boolean
 BPD10: boolean
 BPD11: boolean
 BPD12: boolean
 BPD13: boolean
 BPD14: boolean
 BPD15: boolean
 BPD16: boolean
 BPD17: boolean
 BPD18: boolean
 BPD19: boolean
 BPD20: boolean
 BPD21: boolean
 BPD22: boolean
 BPD23: boolean
 BPD24: boolean
 BPD25: boolean
 BPD26: boolean
 BPD27: boolean
 BPD28: boolean
 BPD29: boolean
 BPD30: boolean
}

type TFindByName = {  
  name: string
}

export type TSubActionUserData = {
  userId: number
}

export interface IUserRepository {
  create(data: TCreateUserData): Promise<IUser>
  findMany(): Promise<IUser[] | null>
  findByName(data: TFindByName): Promise<IUser | null>
  findById(data: TFindById): Promise<IUser | null>
  delete(data: TFindByName): Promise<IUser | null>
  deleteAll(): Promise<null>
  update(data: TUpdateUserData): Promise<IUser | null>
  subAction(data: TSubActionUserData): Promise<IUser | null>
  setUserLocations(): Promise<IUser | null>
}
