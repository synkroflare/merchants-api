import { Router } from 'express'
import { ReadUserController } from '../../../server/modules/user/controllers/ReadUserController'

import { CreateUserController } from '../../../server/modules/user/controllers/CreateUserController'
import { UpdateUserController } from '../../../server/modules/user/controllers/UpdateUserController'
import { ListUserController } from '../../../server/modules/user/controllers/ListUserController'
import { Sub1ActionUserController } from '../../../server/modules/user/controllers/Sub1ActionUserController'
import { SetUserLocationController } from '../../../server/modules/user/controllers/SetUserLocationController'
import { CheckUserController } from '../../../server/modules/user/controllers/CheckUserController'

const createUserController = new CreateUserController()
const readUserController = new ReadUserController()
const checkUserController = new CheckUserController()
///const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()
//const listDiscoveredUserController = new ListDiscoveredUserController()
const updateUserController = new UpdateUserController()
const sub1ActionUserController = new Sub1ActionUserController()
const setUserLocationController = new SetUserLocationController()
const userRoutes = Router()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/read/:userId', readUserController.handle)
userRoutes.get('/check/:userId', checkUserController.handle)
userRoutes.get('/list', listUserController.handle)
userRoutes.put('/subaction/:userId', sub1ActionUserController.handle)
userRoutes.put('/setlocations', setUserLocationController.handle)
//userRoutes.get('/ds', listDiscoveredUserController.handle)
//serRoutes.delete('/:id', deleteUserController.handle)
userRoutes.put('/update/:userId', updateUserController.handle)
export { userRoutes }
