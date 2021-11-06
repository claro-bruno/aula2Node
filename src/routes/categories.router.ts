import { Router } from 'express';
import multer from 'multer';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
// import { PosPostgreesCategoriesRepository } from '../modules/cars/repositories/PostgreesCategoriesRepository';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';



const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});
// const categoriesRepository = CategoriesRepository.getInstance();
// const categoryRepository = new PosPostgreesCategoriesRepository();
// const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response);
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
  return importCategoriesController.handle(request, response);
  // const { file } = request;
  // return response.send();
});

export { categoriesRoutes };