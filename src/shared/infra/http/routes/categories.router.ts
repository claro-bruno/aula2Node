import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '@modules/cars/useCases/importCategories/ImportCategoriesController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { ensureAdmin } from '@shared/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';




const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post('/', ensureAuthenticated, ensureAdmin, createCategoryController.handle);
categoriesRoutes.post('/import', ensureAuthenticated, ensureAdmin, upload.single('file'),importCategoryController.handle);

export { categoriesRoutes };