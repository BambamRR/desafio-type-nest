import { Module } from '@nestjs/common';
import { createProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase';
import { ProdutorController } from './produtor.controller';

@Module({
  providers: [createProdutorUseCase],
  controllers: [ProdutorController],
})
export class ProdutorModule { }
