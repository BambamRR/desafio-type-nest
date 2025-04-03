import { Produtor as ProdutorRaw } from '@prisma/client';
import { Produtor } from 'src/modules/produtor/entities/Produtor';

export class PrismaProdutorMapper {
  static toPrisma({
    id,
    cpfOuCnpj,
    nomeProdutor,
    nomeFazenda,
    cidade,
    estado,
    areaTotal,
    areaAgricultavel,
    areaVegetacao,
    culturas,
    createdAt,
  }: Produtor): ProdutorRaw {
    return {
      id,
      cpfOuCnpj,
      nomeProdutor,
      nomeFazenda,
      cidade,
      estado,
      areaTotal,
      areaAgricultavel,
      areaVegetacao,
      culturas,
      createdAt: createdAt || new Date(),
    };
  }
}
