import { Cultura } from 'src/modules/produtor/entities/Produtor';

export class CreateProdutorBody {
  cpfOuCnpj: string;
  nomeProdutor: string;
  nomeFazenda: string;
  cidade: string;
  estado: string;
  areaTotal: number;
  areaAgricultavel: number;
  areaVegetacao: number;
  culturas: Cultura[];
}
