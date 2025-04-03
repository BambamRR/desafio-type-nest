import { Body, Controller, Post } from '@nestjs/common';
import { CreateProdutorBody } from './dto/CreateProdutorBody';
import { createProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase';

@Controller('produtor')
export class ProdutorController {
  constructor(private createProdutorUseCase: createProdutorUseCase) { }

  @Post()
  async createPost(
    @Body()
    {
      cpfOuCnpj,
      nomeProdutor,
      nomeFazenda,
      cidade,
      estado,
      areaTotal,
      areaAgricultavel,
      areaVegetacao,
      culturas,
    }: CreateProdutorBody,
  ) {
    const produtor = this.createProdutorUseCase.execute({
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

    return produtor;
  }
}
