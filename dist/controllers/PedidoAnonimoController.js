"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoAnonimoController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const PedidoAnonimoRepository_1 = require("../repositories/PedidoAnonimoRepository");
class PedidoAnonimoController {
    async createPedidoAnonimo(req, res) {
        // criar pedido anônimo
        const { material, prioridade, maquina, estado, arquivo, medida, codigo, id_horaDisponivel, id_autorAutorizadorAnonimo, } = req.body;
        // if(!pedido){
        //   return res.status(404).json({message: 'Usuário não existe' }) //refazer a verificação
        // }
        const novoPedido = PedidoAnonimoRepository_1.pedidoAnonimoRepository.create({
            material,
            maquina,
            estado,
            arquivo,
            medida,
            codigo: bcrypt_1.default.hashSync(Date.now().toString(), 10),
            id_horaDisponivel,
            id_autorAutorizadorAnonimo,
        });
        await PedidoAnonimoRepository_1.pedidoAnonimoRepository.save(novoPedido);
        return res.status(201).json(novoPedido);
    }
}
exports.PedidoAnonimoController = PedidoAnonimoController;
