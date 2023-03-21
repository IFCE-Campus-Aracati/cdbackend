"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const PedidoAnonimo_1 = require("./entities/PedidoAnonimo");
const Usuario_1 = require("./entities/Usuario");
const Pedido_1 = require("./entities/Pedido");
const HoraDisponivel_1 = require("./entities/HoraDisponivel");
const Cargo_1 = require("./entities/Cargo");
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Cargo_1.Cargo, HoraDisponivel_1.HoraDisponivel, Pedido_1.Pedido, Usuario_1.Usuario, PedidoAnonimo_1.PedidoAnonimo],
    migrations: [`dist/migrations/*.{js, ts}`],
    "synchronize": true,
    "logging": false,
});
exports.AppDataSource.initialize();
