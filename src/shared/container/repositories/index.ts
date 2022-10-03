import { ICompanyRepository } from '../../../server/modules/global/repositories/ICompanyRepository'
import { PrismaCompanyRepository } from '../../../server/modules/global/repositories/implementations/prisma/PrismaCompanyRepository'

import { container } from 'tsyringe'
import { IDepartmentRepository } from '../../../server/modules/global/repositories/IDepartmentRepository'
import { PrismaDepartmentRepository } from '../../../server/modules/global/repositories/implementations/prisma/PrismaDepartmentRepository'
import { IUserRepository } from '../../../server/modules/global/repositories/IUserRepository'
import { PrismaUserRepository } from '../../../server/modules/global/repositories/implementations/prisma/PrismaUserRepository'
import { PrismaRoomRepository } from '../../../server/modules/global/repositories/implementations/prisma/PrismaRoomRepository'
import { IRoomRepository } from '../../../server/modules/global/repositories/IRoomRepository'

container.registerSingleton<ICompanyRepository>('CompanyRepository', PrismaCompanyRepository)
container.registerSingleton<IUserRepository>('UserRepository', PrismaUserRepository)
container.registerSingleton<IRoomRepository>('RoomRepository', PrismaRoomRepository)

