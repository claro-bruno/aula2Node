import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string,
  description: string,
}

class CreateSpecificationUseCase {
  constructor( private specificationsRepository: ISpecificationsRepository ) {};

  execute({ name, description }: IRequest): void {
    // const categoryRepository = new CategoryRepositoy();
    const specificationAlreadExists = this.specificationsRepository.findbyName(name);
    if(specificationAlreadExists) {
      throw new Error ('Specification Alread Exists!')
      //return response.status(400).json({ error: 'Category Alread Exists!'});
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase };