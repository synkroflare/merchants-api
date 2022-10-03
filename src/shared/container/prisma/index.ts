import { PrismaClient } from '@prisma/client'
import { container } from 'tsyringe'

container.registerInstance<PrismaClient>('PrismaClient', new PrismaClient())
