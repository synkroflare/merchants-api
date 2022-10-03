import { Router } from 'express'
import { ListRoomController } from '../../../server/modules/room/controllers/ListRoomController'

import { CreateRoomController } from '../../../server/modules/room/controllers/CreateRoomController'
import { ReadRoomController } from '../../../server/modules/room/controllers/ReadRoomController'
import { UpdateRoomController } from '../../../server/modules/room/controllers/UpdateRoomController'
import { EnterRoomController } from '../../../server/modules/room/controllers/EnterRoomController'
import { LeaveRoomController } from '../../../server/modules/room/controllers/LeaveRoomController'
import { PassTurnRoomController } from '../../../server/modules/room/controllers/PassTurnRoomController'


const createRoomController = new CreateRoomController()
const readRoomController = new ReadRoomController()
///const deleteUserController = new DeleteUserController()
const listRoomController = new ListRoomController()
//const listDiscoveredUserController = new ListDiscoveredUserController()
const updateRoomController = new UpdateRoomController()
const enterRoomController = new EnterRoomController()
const leaveRoomController = new LeaveRoomController()
const passTurnRoomController = new PassTurnRoomController()
const roomRoutes = Router()

roomRoutes.post('/', createRoomController.handle)
roomRoutes.get('/read/:code-:id', readRoomController.handle)
roomRoutes.get('/list', listRoomController.handle)
roomRoutes.put('/enter', enterRoomController.handle )
roomRoutes.put('/leave', leaveRoomController.handle )
roomRoutes.put('/passturn', passTurnRoomController.handle )
//userRoutes.get('/ds', listDiscoveredUserController.handle)
//serRoutes.delete('/:id', deleteUserController.handle)
roomRoutes.put('/update', updateRoomController.handle)
export { roomRoutes }
