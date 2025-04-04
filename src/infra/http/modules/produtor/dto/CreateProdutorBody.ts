import { Cultura } from '@prisma/client';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateProdutorBody {
  @IsString()
  cpfOuCnpj: string;

  @IsString()
  nomeProdutor: string;

  @IsString()
  nomeFazenda: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsNumber()
  areaTotal: number;

  @IsNumber()
  areaAgricultavel: number;

  @IsNumber()
  areaVegetacao: number;

  @IsArray()
  @IsEnum(Cultura, { each: true })
  culturas: Cultura[];
}
