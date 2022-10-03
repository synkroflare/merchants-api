import { ICompany } from '../models/ICompany'

export type TCreateCompanyData = {
  
  code: number
}

type TFindOneData = {
  userId: number
  slot1: string
  slot2: string
  
}

type TFindById = {
  id: number
}

type TUpdateData = {
  id: number
  name?: string
  cnpj?: string
}

type TFindByName = {  
  name: string
}

type TFindDiscovered = {
  userId: number
}

type TFindPartialsData = {
  slot1: string
  slot2: string
}

export interface ICompanyRepository {
  create(data: TCreateCompanyData): Promise<ICompany[]>
  findOne(data: TFindOneData): Promise<ICompany[] | null>
  findPartials(data: TFindPartialsData): Promise<ICompany[] | null>
  findMany(): Promise<ICompany[] | null>
  findManyDiscovered(data: TFindDiscovered): Promise<ICompany[] | null>
  findByName(data: TFindByName): Promise<ICompany | null>
  findById(data: TFindById): Promise<ICompany | null>
  delete(data: TFindByName): Promise<ICompany | null>
  deleteAll(): Promise<ICompany | null>
  wipeAllData(): Promise<ICompany | null>
  update(data: TFindOneData): Promise<ICompany | null>
}
