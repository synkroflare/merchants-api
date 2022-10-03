import { IDepartment } from '../models/IDepartment'

export type TCreateDepartmentData = {
  points: number
  reasearches: number
  
}

export type TFindOneDepartmentData = {
  id?: number
  name?: string
  companyId: number
}

export type TFindDepartmentById = {
  id: number
}

export type TUpdateDepartmentData = {
  id: number
  name?: string
  imageUrl?: string
  companyId: number
}

export interface IDepartmentRepository {
  create(data: TCreateDepartmentData): Promise<IDepartment>
  findById(data: TFindDepartmentById): Promise<IDepartment | null>
  findByNameCompany(data: TFindOneDepartmentData): Promise<IDepartment | null>
  delete(data: TFindDepartmentById): Promise<IDepartment | null>
  findMany(): Promise<IDepartment[]>
  update(data: TUpdateDepartmentData): Promise<IDepartment | null>
}
