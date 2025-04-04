import { Produtor } from 'src/modules/produtor/entities/Produtor';

export class ProdutorViewModel {
  static toView({
    cpfOuCnpj,
    nomeProdutor,
    nomeFazenda,
    cidade,
    estado,
    areaTotal,
    areaAgricultavel,
    areaVegetacao,
    culturas,
  }: Produtor) {
    return {
      cpfOuCnpj,
      nomeProdutor,
      nomeFazenda,
      cidade,
      estado,
      areaTotal,
      areaAgricultavel,
      areaVegetacao,
      culturas,
    };
  }
}
