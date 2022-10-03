import { Router } from 'express'
import { companyRoutes } from './company.routes'
import { departmentRoutes } from './department.routes'
import { roomRoutes } from './room.routes'
import { userRoutes } from './user.routes'

const router = Router()

router.use('/company', companyRoutes)
router.use('/department', departmentRoutes)
router.use('/user', userRoutes)
router.use('/room', roomRoutes)

export { router }
