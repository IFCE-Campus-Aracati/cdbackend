import { HoraDisponivel } from "./HoraDisponivel";
import { Usuario } from "./Usuario";




export class PedidoAnonimo {

  readonly id_pedidoAnonimo: number;
  readonly material: string;
  readonly maquina: string;
  readonly estado: string;
  readonly arquivo: Buffer;
  readonly medida: string;
  readonly codigo: string;
  readonly id_horaDisponivel: HoraDisponivel;
  readonly id_autorAutorizadorAnonimo: Usuario;

  constructor(id_pedidoAnonimo: number, material: string, maquina: string, estado: string, arquivo: Buffer,
    medida: string, codigo: string, id_horaDisponivel: HoraDisponivel, id_autorAutorizadorAnonimo: Usuario) {

        this.id_pedidoAnonimo = id_pedidoAnonimo
        this.material = material
        this.maquina = maquina
        this.estado = estado
        this.arquivo = arquivo
        this.medida = medida
        this.codigo = codigo
        this.id_horaDisponivel = id_horaDisponivel
        this.id_autorAutorizadorAnonimo = id_autorAutorizadorAnonimo
  }

  
}
