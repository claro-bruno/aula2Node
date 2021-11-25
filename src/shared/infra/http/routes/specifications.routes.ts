import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecifications/ListSpecificationsController';
import { ensureAdmin } from '@shared/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController(); 
const listSpecificationsController = new ListSpecificationsController(); 

specificationsRoutes.get('/', listSpecificationsController.handle);
specificationsRoutes.post('/', ensureAuthenticated, ensureAdmin, createSpecificationController.handle);


export { specificationsRoutes };
