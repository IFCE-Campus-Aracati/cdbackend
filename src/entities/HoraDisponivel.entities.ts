import { Pedido } from './Pedido.entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("horaDisponivel")
export class HoraDisponivel {
  @PrimaryGeneratedColumn()
  id_hora: number;

  @Column({ type: "text" })
  dataInicio: Date;

  @Column({ type: "text" })
  dataFim: Date;

  @Column()
  disponivel: boolean = false;

  @OneToMany(() => Pedido, (pedido) => pedido.id_horaDisponivel)
  horas: HoraDisponivel[] | null;

}
