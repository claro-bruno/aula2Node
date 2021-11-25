
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

import { ensureAdmin } from '@shared/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';

const carsRoutes = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationsController = new CreateCarSpecificationController();

carsRoutes.get('/available', listAvailableCarsController.handle);
carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.post('/specifications/:id', ensureAuthenticated, ensureAdmin, createCarSpecificationsController.handle);

export { carsRoutes }