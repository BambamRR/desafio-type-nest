import { Produtor } from '../entities/Produtor';

export abstract class ProdutorRepository {
  abstract create(produtor: Produtor): Promise<void>;
  abstract findAll(): Promise<Produtor[]>;
  abstract findById(id: string): Promise<Produtor>;
  abstract update(produtor: Produtor): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
