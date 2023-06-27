import { HoraDisponivel } from "./HoraDisponivel.entities";
import { Usuario } from "./Usuario.entities";
import { Estado } from "../models/Pedido";

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

  @Column({ type: "enum", enum: Estado })
  estado: string;

  @Column({ type: "text", nullable: true })
  arquivo: string;

  @Column({ type: "text", nullable: true })
  cor: string | null;

  @Column({ type: "text", nullable: true })
  descricao: string | null;

  @Column({ type: "text", nullable: true })
  comentario: string | null;

  @Column({ type: "text", nullable: true })
  codigo: string;

  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({ name: "id_horaDisponivel" })
  id_horaDisponivel: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizadorAnonimo)
  @JoinColumn({ name: "id_autorAutorizadorAnonimo" })
  id_autorAutorizadorAnonimo: number | null;
}
