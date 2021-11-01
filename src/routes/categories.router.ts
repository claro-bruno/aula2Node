import { Router } from 'express';
import multer from 'multer';
// import { v4 as uuidv4 } from 'uuid';
// import { Category } from '../model/category';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
// import { PosPostgreesCategoriesRepository } from '../modules/cars/repositories/PostgreesCategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
// import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});
// const categoriesRepository = CategoriesRepository.getInstance();
// const categoryRepository = new PosPostgreesCategoriesRepository();
// const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
  // const { name, description } = request.body;
  // const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  // createCategoryUseCase.execute({ name, description });
  // return response.status(201).send();

});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
  // const all = categoriesRepository.list();
  // return response.status(200).json(all);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;
  return response.send();
});

export { categoriesRoutes };