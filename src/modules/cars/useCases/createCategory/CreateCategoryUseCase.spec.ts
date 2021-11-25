import { AppError } from '@shared/errors/AppError';
import { InMemoryCategoriesRepository } from '@modules/cars/repositories/in-memory/InMemoryCategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';


let createCategoryUseCase: CreateCategoryUseCase;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;

describe('Create Category', () => {

  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoriesRepository);
  });
  

  it('should to be able to create a new category', async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await inMemoryCategoriesRepository.findbyName(
      category.name
    );
    // const categoryCreated = await inMemoryCategoriesRepository.findbyName(category.name);

    expect(categoryCreated).toHaveProperty('id');

  });
  it('should not to be able to create a new category if name exists', async () => {
    

    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  
});
