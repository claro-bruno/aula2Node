import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';
import { ImportCategoriesController } from "./ImportCategoriesController";
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

// const categoriesRepository = new CategoriesRepository.getInstance();
const categoriesRepository = null;

const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController  }