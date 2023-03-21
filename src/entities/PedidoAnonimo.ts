import { HoraDisponivel } from "./HoraDisponivel";
import { Usuario } from "./Usuario";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("pedidosAnonimo")
export class PedidoAnonimo {
  @PrimaryGeneratedColumn()
  id_pedidoAnonimo: number;

  @Column({ type: "text", nullable: true })
  material: string;

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", nullable: true })
  estado: string;

  @Column({ type: "bytea", nullable: true })
  arquivo: Buffer;

  @Column({ type: "text", nullable: true })
  medida: string;

  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({ name: "id_horaDisponivel" })
  id_horaDisponivel: HoraDisponivel;

  @ManyToOne(() => Usuario, (usuario) => usuario.AutorAutorizadorAnonimo)
  @JoinColumn({ name: "id_autorAutorizadorAnonimo" })
  id_autorAutorizadorAnonimo: Usuario;
}
