import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({ createdAt, id, email, name, password }: User): UserRaw {
    return {
      createdAt,
      id,
      email,
      name,
      password,
    };
  }
}
