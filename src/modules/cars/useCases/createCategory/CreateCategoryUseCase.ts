import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string,
  description: string,
}

class CreateCategoryUseCase {
  constructor( private categoriesRepository: ICategoriesRepository ) {};

  execute({ name, description }: IRequest): void {
    // const categoryRepository = new CategoryRepositoy();
    const categoryAlreadExists = this.categoriesRepository.findbyName(name);
    if(categoryAlreadExists) {
      throw new Error ('Category Alread Exists!')
      //return response.status(400).json({ error: 'Category Alread Exists!'});
    }
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase };