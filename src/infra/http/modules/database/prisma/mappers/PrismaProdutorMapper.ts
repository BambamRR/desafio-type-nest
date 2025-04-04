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

  static toDomain(prismaProdutor: ProdutorRaw & { culturas: any[] }): Produtor {
    return new Produtor(
      {
        cpfOuCnpj: prismaProdutor.cpfOuCnpj,
        nomeProdutor: prismaProdutor.nomeProdutor,
        nomeFazenda: prismaProdutor.nomeFazenda,
        cidade: prismaProdutor.cidade,
        estado: prismaProdutor.estado,
        areaTotal: prismaProdutor.areaTotal,
        areaAgricultavel: prismaProdutor.areaAgricultavel,
        areaVegetacao: prismaProdutor.areaVegetacao,
        culturas: prismaProdutor.culturas,
        createdAt: prismaProdutor.createdAt,
      },
      prismaProdutor.id,
    );
  }
}
