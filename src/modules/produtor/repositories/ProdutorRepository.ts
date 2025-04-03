import { Produtor } from '../entities/Produtor';

export abstract class ProdutorRepository {
  abstract create(produtor: Produtor): Promise<void>;
}
