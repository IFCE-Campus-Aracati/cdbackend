"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoAnonimoRepository = void 0;
const PedidoAnonimo_entites_1 = require("../entities/PedidoAnonimo.entites");
const data_source_1 = require("./../data-source");
exports.pedidoAnonimoRepository = data_source_1.AppDataSource.getRepository(PedidoAnonimo_entites_1.PedidoAnonimo);
