import { PedidoAnonimo } from './entities/PedidoAnonimo.entites';
import { Usuario } from './entities/Usuario.entities';
import { Pedido } from './entities/Pedido.entities';
import { HoraDisponivel } from './entities/HoraDisponivel.entities';
import { Cargo } from './entities/Cargo.entities';
import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { default1679541259198 } from './migrations/1679541259198-default';


const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Cargo, HoraDisponivel, Pedido, Usuario, PedidoAnonimo],
  migrations: [default1679541259198],
  subscribers: []
});

AppDataSource.initialize()
