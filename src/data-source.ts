import { PedidoAnonimo } from './entities/PedidoAnonimo';
import { Usuario } from './entities/Usuario';
import { Pedido } from './entities/Pedido';
import { HoraDisponivel } from './entities/HoraDisponivel';
import { Cargo } from './entities/Cargo';
import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Cargo,HoraDisponivel,Pedido,Usuario, PedidoAnonimo],
  migrations: [`dist/migrations/*.{js, ts}`],
  "synchronize": true, 
  "logging": false, 
});

AppDataSource.initialize()
