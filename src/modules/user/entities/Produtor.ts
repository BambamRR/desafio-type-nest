import { randomUUID } from "crypto"
import { Replace } from "src/utils/Replace"
import { validateCpfCnpj } from "src/utils/validadeCpfCnpj";

export type Cultura = "Soja" | "Milho" | "Algodão" | "Café" | "Cana de Açucar";

interface ProdutorSchema {
  cpfOuCnpj: string;
  nomeProdutor: string;
  nomeFazenda: string;
  cidade: string;
  estado: string;
  areaTotal: number;
  areaAgricultavel: number;
  areaVegetacao: number;
  culturas: Cultura[];
  createdAt: Date;
}

export class Produtor {
  props: ProdutorSchema
  _id: string

  constructor(props: ProdutorSchema, id?: string) {

    if (!validateCpfCnpj) {
      throw new Error('CPF ou CNPJ inválido')
    }
    this.props = {
      ...props,
    }
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id
  }

  get cpfOuCnpj(): string {
    return this.props.cpfOuCnpj
  }

  set cpfOuCnpj(cpfOuCnpj: string) {
    this.props.cpfOuCnpj = cpfOuCnpj
  }

  get nomeProdutor(): string {
    return this.props.nomeProdutor
  }

  set nomeProdutor(nomeProdutor: string) {
    this.props.nomeProdutor = nomeProdutor
  }

  get nomeFazenda(): string {
    return this.props.nomeFazenda
  }

  set nomeFazenda(nomeFazenda: string) {
    this.props.nomeFazenda = nomeFazenda
  }

  get estado(): string {
    return this.props.estado
  }

  set estado(estado: string) {
    this.props.estado = estado
  }

  get cidade(): string {
    return this.props.cidade
  }

  set cidade(cidade: string) {
    this.props.cidade = cidade
  }

  get areaTotal(): number {
    return this.props.areaTotal
  }

  set areaTotal(areaTotal: number) {
    this.props.areaTotal = areaTotal
  }

  get areaAgricultavel(): number {
    return this.props.areaAgricultavel
  }

  set areaAgricultavel(areaAgricultavel: number) {
    this.props.areaAgricultavel = areaAgricultavel
  }


  get areaVegetacao(): number {
    return this.props.areaVegetacao
  }

  set areaVegetacao(areaVegetacao: number) {
    this.props.areaVegetacao = areaVegetacao
  }
}