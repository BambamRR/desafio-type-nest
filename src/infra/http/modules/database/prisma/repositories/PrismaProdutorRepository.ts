import { Injectable } from '@nestjs/common';
import { Produtor } from 'src/modules/produtor/entities/Produtor';
import { ProdutorRepository } from 'src/modules/produtor/repositories/ProdutorRepository';
import { PrismaService } from '../prisma.service';
import { PrismaProdutorMapper } from '../mappers/PrismaProdutorMapper';

@Injectable()
export class PrismaProdutorRepository implements ProdutorRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Produtor[]> {
    const produtores = await this.prisma.produtor.findMany({});
    return produtores.map((prismaProdutor) =>
      PrismaProdutorMapper.toDomain(prismaProdutor),
    );
  }

  async findById(id: string): Promise<Produtor> {
    throw new Error('Method not implemented.');
  }
  async update(produtor: Produtor): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async create(produtor: Produtor): Promise<void> {
    const produtorRaw = PrismaProdutorMapper.toPrisma(produtor);
    await this.prisma.produtor.create({
      data: produtorRaw,
    });
  }
}
