import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository';
import { getRepository, Repository } from 'typeorm';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;


  constructor() {
    this.repository = getRepository(Specification);;
  };

  
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description, 
      name,
    });

    await this.repository.save(specification);
    
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findbyName(name: string): Promise<Specification> {
    const category = await this.repository.findOne({ name })
    return category;
  }
}

export { SpecificationsRepository }