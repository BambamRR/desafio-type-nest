import { Module } from '@nestjs/common';
import { ProdutorController } from './produtor.controller';
import { DataBaseModule } from '../database/database.module';
import { CreateProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase/createProdutorUseCase';
import { FindAllProdutorUseCase } from 'src/modules/produtor/useCases/findAllProdutorUseCase/findAllProdutorUseCase.';

@Module({
  imports: [DataBaseModule],
  providers: [CreateProdutorUseCase, FindAllProdutorUseCase],
  controllers: [ProdutorController],
})
export class ProdutorModule { }
