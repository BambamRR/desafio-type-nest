import { Module } from '@nestjs/common';
import { ProdutorController } from './produtor.controller';
import { DataBaseModule } from '../database/database.module';
import { CreateProdutorUseCase } from 'src/modules/produtor/useCases/createProdutorUseCase/createProdutorUseCase';

@Module({
  imports: [DataBaseModule],
  providers: [CreateProdutorUseCase],
  controllers: [ProdutorController],
})
export class ProdutorModule { }
