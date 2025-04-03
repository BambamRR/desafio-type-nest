import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { UserController } from './user.controller';
import { DataBaseModule } from '../database/database.module';

@Module({
  providers: [CreateUserUseCase, DataBaseModule],
  controllers: [UserController],
})
export class UserModule { }
