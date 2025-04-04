import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProdutorBody } from './dto/CreateProdutorBody';
import { CreateProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase/createProdutorUseCase';
import { ProdutorViewModel } from './viewModel/produtorViewModel';
import { Produtor } from 'src/modules/produtor/entities/Produtor';
import { FindAllProdutorUseCase } from 'src/modules/produtor/useCases/findAllProdutorUseCase/findAllProdutorUseCase.';

@Controller('produtor')
export class ProdutorController {
  constructor(
    private createProdutorUseCase: CreateProdutorUseCase,
    private findAllProdutorUseCase: FindAllProdutorUseCase,
  ) { }

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

  @Get()
  async findAll() {
    const produtores = await this.findAllProdutorUseCase.execute();
    return produtores.map(ProdutorViewModel.toView);
  }
}
