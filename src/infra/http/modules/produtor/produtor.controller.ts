import { Body, Controller, Post } from '@nestjs/common';
import { CreateProdutorBody } from './dto/CreateProdutorBody';
import { CreateProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase/createProdutorUseCase';

@Controller('produtor')
export class ProdutorController {
  constructor(private createProdutorUseCase: CreateProdutorUseCase) { }

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
    const produtor = await this.createProdutorUseCase.execute({
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
