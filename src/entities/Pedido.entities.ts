import { HoraDisponivel } from './HoraDisponivel.entities';
import { Usuario } from './Usuario.entities';

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

  @Column({ type: "text", nullable:true })
  material: string;
  
  @Column({type: "text"})
  prioridade: Prioridade

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", nullable: true })
  estado: Estado;
  
  @Column({type: 'text', nullable:true})
  arquivo: Buffer
  
  @Column({type:"text", nullable:true})
  medida: string
  
  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({name: "id_horaDisponivel"})
  id_horaDisponivel: HoraDisponivel

  @ManyToOne(() => Usuario, (usuario) => usuario.autorPedido)
  @JoinColumn({name: "id_autorPedido"})
  id_autorPedido: Usuario
  
  @ManyToOne(() => Usuario, (usuario) => usuario.autorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador"})
  id_autorAutorizador: Usuario;
  
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