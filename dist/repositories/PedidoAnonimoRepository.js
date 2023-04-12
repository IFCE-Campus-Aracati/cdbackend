"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoAnonimoRepository = void 0;
const PedidoAnonimo_1 = require("./../entities/PedidoAnonimo");
const data_source_1 = require("./../data-source");
exports.pedidoAnonimoRepository = data_source_1.AppDataSource.getRepository(PedidoAnonimo_1.PedidoAnonimo);
