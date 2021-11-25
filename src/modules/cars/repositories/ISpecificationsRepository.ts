import { Specification }  from '../infra/typeorm/entities/Specification';

interface ICreateSpecificationDTO {
  name: string,
  description: string,
};

interface ISpecificationsRepository {
  findbyName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;

}

export { ISpecificationsRepository, ICreateSpecificationDTO };
