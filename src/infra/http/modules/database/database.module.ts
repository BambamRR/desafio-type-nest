import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/UserReposiory';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { ProdutorRepository } from 'src/modules/produtor/repositories/ProdutorRepository';
import { PrismaProdutorRepository } from './prisma/repositories/PrismaProdutorRepository';

@Module({
  providers: [
    PrismaService,

    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: ProdutorRepository,
      useClass: PrismaProdutorRepository,
    },
  ],
  exports: [UserRepository, ProdutorRepository],
})
export class DataBaseModule { }
