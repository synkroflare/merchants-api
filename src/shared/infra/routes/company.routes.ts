import { Router } from 'express'
import { ReadCompanyController } from '../../../server/modules/company/controllers/ReadCompanyController'
import { CreateCompanyController } from '../../../server/modules/company/controllers/CreateCompanyController'
import { ListCompanyController } from '../../../server/modules/company/controllers/ListCompanyController'
import { ListDiscoveredCompanyController } from '../../../server/modules/company/controllers/ListDiscoveredCompanyController'
import { UpdateCompanyController } from '../../../server/modules/company/controllers/UpdateCompanyController'
import { AdminWipeController } from '../../../server/modules/admin/controllers/AdminWipeController'

const createCompanyController = new CreateCompanyController()
const readCompanyController = new ReadCompanyController()
const listCompanyController = new ListCompanyController()
const listDiscoveredCompanyController = new ListDiscoveredCompanyController()
const updateCompanyController = new UpdateCompanyController()
const wipeAllCompanyController = new AdminWipeController()
const companyRoutes = Router()

companyRoutes.post('/', createCompanyController.handle)
companyRoutes.get('/read/:userId/:slot1-:slot2', readCompanyController.handle)
companyRoutes.get('/list', listCompanyController.handle)
companyRoutes.get('/listds/:userId', listDiscoveredCompanyController.handle)
companyRoutes.delete('/wipe', wipeAllCompanyController.handle)
companyRoutes.put('/:id', updateCompanyController.handle)
export { companyRoutes }
