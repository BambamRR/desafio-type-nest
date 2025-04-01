import { Injectable } from '@nestjs/common';
import { Cultura, Produtor } from '../entities/Produtor';
import { ProdutorRepository } from '../repositories/ProdutorRepository';

interface CreateProdutorRequest {
  cpfOuCnpj: string;
  nomeProdutor: string;
  nomeFazenda: string;
  cidade: string;
  estado: string;
  areaTotal: number;
  areaAgricultavel: number;
  areaVegetacao: number;
  culturas: Cultura[];
  createdAt: Date;
}

@Injectable()
export class createProdutorUseCase {
  constructor(private produtorRepository: ProdutorRepository) { }
  async execute({
    cpfOuCnpj,
    nomeProdutor,
    nomeFazenda,
    cidade,
    estado,
    areaTotal,
    areaAgricultavel,
    areaVegetacao,
    culturas,
  }: CreateProdutorRequest) {
    const produtor = new Produtor({
      cpfOuCnpj,
      nomeProdutor,
      nomeFazenda,
      cidade,
      estado,
      areaTotal,
      areaAgricultavel,
      areaVegetacao,
      culturas,
    });

    await this.produtorRepository.create(produtor);
  }
}
