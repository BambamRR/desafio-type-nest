import { Injectable } from '@nestjs/common';
import { Produtor } from 'src/modules/produtor/entities/Produtor';
import { ProdutorRepository } from 'src/modules/produtor/repositories/ProdutorRepository';
import { PrismaService } from '../prisma.service';
import { PrismaProdutorMapper } from '../mappers/PrismaProdutorMapper';

@Injectable()
export class PrismaProdutorRepository implements ProdutorRepository {
  constructor(private prisma: PrismaService) { }
  async create(produtor: Produtor): Promise<void> {
    const produtorRaw = PrismaProdutorMapper.toPrisma(produtor);
    await this.prisma.produtor.create({
      data: produtorRaw,
    });
  }
}
