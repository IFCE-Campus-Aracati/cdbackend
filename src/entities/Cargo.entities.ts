import { Usuario } from "./Usuario.entities";

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

@Entity("cargos")
export class Cargo {
  @PrimaryGeneratedColumn({type: "int"})
  id_cargo: number;

  @Column({ type: "text" })
  cargo: string ;

  @OneToMany(() => Usuario, (usuario) => usuario.id_cargo)
  id_usuario: Cargo[] | null;

}
