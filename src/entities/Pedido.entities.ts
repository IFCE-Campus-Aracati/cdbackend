import { HoraDisponivel } from "./HoraDisponivel.entities";
import { Usuario } from "./Usuario.entities";
import { DeepPartial } from "typeorm";
import { Estado } from "../models/Pedido";
import { Prioridade } from "../models/Pedido";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column({ type: "text", nullable: true })
  material: string | null;

  @Column({ type: "enum", enum: Prioridade })
  prioridade: Prioridade;

  @Column({ type: "text", nullable: true })
  maquina: string | null;

  @Column({ type: "enum", enum: Estado })
  estado: Estado;

  @Column({ type: "text", nullable: true })
  arquivo: string;

  @Column({ type: "text", nullable: true })
  cor: string | null;

  @Column({ type: "text", nullable: true })
  descricao: string | null;

  @Column({ type: "text", nullable: true })
  comentario: string | null;

  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({ name: "id_horaDisponivel" })
  id_horaDisponivel: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.autorPedido)
  @JoinColumn({name: "id_autorPedido"})
  id_autorPedido: number
  
  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador" })
  id_autorAutorizador: number | null;
}
