import { PedidoAnonimo } from "./PedidoAnonimo";
import { Cargo } from "./Cargo";
import { Pedido } from "./Pedido";
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

  @Column({ type: "text", unique: true })
  senha: string;

  @ManyToOne(() => Cargo, (cargo) => cargo.id_usuario)
  @JoinColumn({ name: "id_cargo" })
  id_cargo: Cargo;

  @OneToMany(() => Pedido, (pedido) => pedido.id_autorPedido)
  AutorPedido: Pedido[];

  @OneToMany(() => Pedido, (pedido) => pedido.id_autorAutorizador)
  AutorAutorizador: Pedido[];

  @OneToMany(
    () => PedidoAnonimo,
    (pedidoanonimo) => pedidoanonimo.id_autorAutorizadorAnonimo
  )
  AutorAutorizadorAnonimo: PedidoAnonimo[];
}
