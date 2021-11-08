import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe';
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string,
  description: string,
}

@injectable()
class CreateCategoryUseCase {
  constructor( 
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository ) {};

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadExists = await this.categoriesRepository.findbyName(name);
    if(categoryAlreadExists) {
      throw new AppError ('Category Alread Exists!')
    }
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase };