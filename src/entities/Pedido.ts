import { HoraDisponivel } from './HoraDisponivel';
import { Usuario } from './Usuario';

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
  prioridade: string

  @Column({ type: "text", nullable: true })
  maquina: string;

  @Column({ type: "text", nullable: true })
  estado: string;
  
  @Column({type: 'bytea', nullable:true})
  arquivo: Buffer
  
  @Column({type:"text", nullable:true})
  medida: string
  
  @ManyToOne(() => HoraDisponivel, (horaDisponivel) => horaDisponivel.horas)
  @JoinColumn({name: "id_horaDisponivel"})
  id_horaDisponivel: HoraDisponivel

  @ManyToOne(() => Usuario, (usuario) => usuario.AutorPedido)
  @JoinColumn({name: "id_autorPedido"})
  id_autorPedido: Usuario
  
  @ManyToOne(() => Usuario, (usuario) => usuario.AutorAutorizador)
  @JoinColumn({ name: "id_autorAutorizador"})
  id_autorAutorizador: Usuario;
}
