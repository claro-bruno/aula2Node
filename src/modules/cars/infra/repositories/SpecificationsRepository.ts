

import { getRepository, Repository } from 'typeorm';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Specification } from '../typeorm/entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;


  constructor() {
    this.repository = getRepository(Specification);;
  }
;

  
  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description, 
      name,
    });

    await this.repository.save(specification);
    return specification;
    
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findbyName(name: string): Promise<Specification> {
    const category = await this.repository.findOne({ name })
    return category;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}

export { SpecificationsRepository }