import { Injectable } from '@nestjs/common';
import { ProdutorRepository } from '../../repositories/ProdutorRepository';

@Injectable()
export class FindAllProdutorUseCase {
  constructor(private produtorRepository: ProdutorRepository) { }
  async execute() {
    const produtor = await this.produtorRepository.findAll();
    return produtor;
  }
}
