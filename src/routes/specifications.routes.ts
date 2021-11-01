import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';
// import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase';

const specificationsRouter = Router();

// const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
  // const { name, description } = request.body;
  // const createSpecificationService = new CreateSpecificationUseCase(specificationsRepository);

  // createSpecificationService.execute({ name, description });

  // return response.status(201).send();
});

specificationsRouter.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
  // const all = specificationsRepository.list();
  // return response.status(200).json(all);
});

export { specificationsRouter };
