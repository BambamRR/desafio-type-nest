import { Body, Controller, Post } from '@nestjs/common';
import { CreateProdutorBody } from './dto/CreateProdutorBody';
import { CreateProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase/createProdutorUseCase';
import { ProdutorViewModel } from './viewModel/produtorViewModel';

@Controller('produtor')
export class ProdutorController {
  constructor(private createProdutorUseCase: CreateProdutorUseCase) {}

  @Post()
  async createPost(@Body() body: CreateProdutorBody) {
    const {
      cpfOuCnpj,
      nomeProdutor,
      nomeFazenda,
      cidade,
      estado,
      areaTotal,
      areaAgricultavel,
      areaVegetacao,
      culturas,
    } = body;
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

    return ProdutorViewModel.toView(produtor);
  }
}
