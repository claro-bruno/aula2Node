import { AppError } from "@shared/errors/AppError";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string,
  description: string,
}

@injectable()
class CreateSpecificationUseCase {
  constructor( 
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository ) {};

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadExists = await this.specificationsRepository.findbyName(name);
    if(specificationAlreadExists) {
      throw new AppError ('Specification Alread Exists!')
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase };