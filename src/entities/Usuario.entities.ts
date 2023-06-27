import { PedidoAnonimo } from "./PedidoAnonimo.entites";
import { Cargo } from "./Cargo.entities";
import { Pedido } from "./Pedido.entities";
import {Usuario as User} from "../models/Usuario"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text"})
  senha: string;

  @Column({ type: "longblob", nullable: true })
  foto: Buffer | null;

  @ManyToOne(() => Cargo, (cargo) => cargo.id_usuario)
  @JoinColumn({ name: "id_cargo" })
  id_cargo: Cargo;


  @OneToMany(() => Pedido, (pedido) => pedido.id_autorPedido)
  autorPedido: Pedido[] | null;

  @OneToMany(() => Pedido, (pedido) => pedido.id_autorAutorizador)
  autorAutorizador: Pedido[] | null;

  @OneToMany(
    () => PedidoAnonimo,
    (pedidoanonimo) => pedidoanonimo.id_autorAutorizadorAnonimo
  )
  autorAutorizadorAnonimo: PedidoAnonimo[] | null;

}
