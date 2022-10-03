import { Router } from 'express'
import { ReadDepartmentController } from '../../../server/modules/department/controllers/ReadDepartmentController'
import { CreateDepartmentController } from '../../../server/modules/department/controllers/CreateDepartmentController'
import { DeleteDepartmentController } from '../../../server/modules/department/controllers/DeleteDepartmentController'
import { UpdateDepartmentController } from '../../../server/modules/department/controllers/UpdateDepartmentController'
import { ListDepartmentController } from '../../../server/modules/department/controllers/ListDepartmentController'

const createDepartmentController = new CreateDepartmentController()
const readDepartmentController = new ReadDepartmentController()
const updateDepartmentController = new UpdateDepartmentController()
const deleteDepartmentController = new DeleteDepartmentController()
const listDepartmentController = new ListDepartmentController()

const departmentRoutes = Router()

departmentRoutes.post('/', createDepartmentController.handle)
departmentRoutes.get('/:id', readDepartmentController.handle)
departmentRoutes.put('/:id', updateDepartmentController.handle)
departmentRoutes.delete('/:id', deleteDepartmentController.handle)
departmentRoutes.get('/', listDepartmentController.handle)

export { departmentRoutes }
