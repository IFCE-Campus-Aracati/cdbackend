import { Usuario } from "./Usuario";

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity("cargos")
export class Cargo {
  @PrimaryGeneratedColumn()
  id_cargo: number;

  @Column({ type: "text" })
  cargo: string = "Membro da Comunidade";

  @OneToMany(() => Usuario, (usuario) => usuario.id_cargo)
  id_usuario: Cargo[];
}
