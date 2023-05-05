import { HoraDisponivel } from './HoraDisponivel';
import { Usuario } from './Usuario';



export class Pedido {

  readonly id_pedido: number;
  readonly material: string;
  readonly prioridade: Prioridade
  readonly maquina: string;
  readonly estado: Estado;
  readonly arquivo: Buffer
  readonly medida: string
  readonly id_horaDisponivel: HoraDisponivel
  readonly id_autorPedido: Usuario
  readonly id_autorAutorizador: Usuario;
  
  
  constructor(id_pedido: number, material: string, prioridade: Prioridade, maquina: string,
    estado: Estado, arquivo: Buffer, medida: string, id_horaDisponivel: HoraDisponivel, 
    id_autorPedido: Usuario, id_autorAutorizador: Usuario) {

    this.id_pedido = id_pedido
    this.material = material
    this.prioridade = prioridade
    this.maquina = maquina
    this.estado = estado
    this.arquivo = arquivo
    this.medida = medida
    this.id_horaDisponivel = id_horaDisponivel
    this.id_autorPedido = id_autorPedido
    this.id_autorAutorizador = id_autorAutorizador
  }   

  public get Id() : number {
    return this.id_pedido
  }
  public get Material(): string {
    return this.material
  }
  public get Prioridade(): Prioridade {
    return this.prioridade
  }
  public get Maquina(): string {
    return this.maquina
  }
  public get Estado(): Estado {
    return this.estado
  }
  public get Arquivo(): Buffer {
    return this.arquivo
  }
  public get Medida(): string {
    return this.medida
  }

  public get Id_horaDisponivel() : HoraDisponivel {
    return this.id_horaDisponivel
  }

  public get Id_autorPedido() : Usuario {
    return this.id_autorPedido
  }

  public get Id_autorAutorizador() : Usuario {
    return this.id_autorAutorizador
  }

}

export enum Estado {
  pendete,
  aprovado,
  concluido,
  reprovado,
}

export enum Prioridade {
  baixa,
  media,
  alta

}

