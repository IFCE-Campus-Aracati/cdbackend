import { PedidoAnonimo } from './entities/PedidoAnonimo.entites';
import { Usuario } from './entities/Usuario.entities';
import { Pedido } from './entities/Pedido.entities';
import { HoraDisponivel } from './entities/HoraDisponivel.entities';
import { Cargo } from './entities/Cargo.entities';
import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { default1687219870803 } from './migrations/1687219870803-default';



const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Cargo, HoraDisponivel, Pedido, Usuario, PedidoAnonimo],
  migrations: [default1687219870803],
  subscribers: []
});

AppDataSource.initialize()