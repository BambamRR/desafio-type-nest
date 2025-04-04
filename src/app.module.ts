import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DataBaseModule } from './infra/http/modules/database/database.module';
import { ProdutorModule } from './infra/http/modules/produtor/produtor.module';

@Module({
  imports: [UserModule, DataBaseModule, ProdutorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
