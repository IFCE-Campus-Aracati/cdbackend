import { Pedido } from './Pedido';


import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("HoraDisponivel")
export class HoraDisponivel {
  @PrimaryGeneratedColumn()
  id_hora: number;

  @Column({ type: "timestamptz" })
  dataInicio: Date;

  @Column({ type: "timestamptz" })
  dataFim: Date;

  @Column()
  Disponivel: boolean = false;

  @OneToMany(() => Pedido, (pedido) => pedido.id_horaDisponivel)
  horas: HoraDisponivel[];
}
