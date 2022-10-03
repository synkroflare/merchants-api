import { Router } from 'express'
import { companyRoutes } from './company.routes'
import { roomRoutes } from './room.routes'
import { userRoutes } from './user.routes'

const router = Router()

router.use('/company', companyRoutes)
router.use('/user', userRoutes)
router.use('/room', roomRoutes)

export { router }
