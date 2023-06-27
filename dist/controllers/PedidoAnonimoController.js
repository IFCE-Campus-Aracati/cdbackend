"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoAnonimoController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const PedidoAnonimoRepository_1 = require("../repositories/PedidoAnonimoRepository");
const PedidoAnonimo_1 = require("../models/PedidoAnonimo");
class PedidoAnonimoController {
    async createPedidoAnonimo(req, res) {
        // criar pedido anônimo
        const { material, prioridade, maquina, estado, arquivo, medida, codigo, id_horaDisponivel, id_autorAutorizadorAnonimo, } = req.body;
        try {
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
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async listPedidosAnonimos(req, res) {
        try {
            const pedidos = await PedidoAnonimoRepository_1.pedidoAnonimoRepository.find();
            return res.status(200).json(pedidos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async listPedidosAnonimosT(req, res) {
        try {
            const pedidos = await PedidoAnonimoRepository_1.pedidoAnonimoRepository
                .createQueryBuilder("pedidoAnonimo")
                .leftJoinAndSelect("pedidoAnonimo.id_horaDisponivel", "horaDisponivel")
                .leftJoinAndSelect("pedidoAnonimo.id_autorAutorizadorAnonimo", "autorAutorizadorAnonimo")
                .leftJoinAndSelect("autorAutorizadorAnonimo.id_cargo", "cargo")
                .getMany();
            return res.status(200).json(pedidos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getPedidoByCodigo(req, res) {
        const { codigo } = req.params;
        try {
            const pedido = await PedidoAnonimoRepository_1.pedidoAnonimoRepository.findOne({
                where: { codigo: codigo },
            });
            if (!pedido) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            return res.status(200).json(pedido);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async updatePedido(req, res) {
        const { codigo } = req.params;
        const { material, maquina, medida } = req.body;
        const pedido = await PedidoAnonimoRepository_1.pedidoAnonimoRepository.findOne({
            where: { codigo: codigo },
        });
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        if (pedido.estado.toString().toLowerCase() !== PedidoAnonimo_1.Estado.pendente) {
            throw new Error("O pedido não pode ser excluído porque não está no estado 'pendente'");
        }
        pedido.material = material || pedido.material;
        pedido.maquina = maquina || pedido.maquina;
        pedido.medida = medida || pedido.medida;
        await PedidoAnonimoRepository_1.pedidoAnonimoRepository.save(pedido);
        return res.status(200).json(pedido);
    }
    async deletePedido(req, res) {
        const { codigo } = req.params;
        // Verificando se o pedido existe e se o estado é "pendente"
        const pedido = await PedidoAnonimoRepository_1.pedidoAnonimoRepository.findOne({
            where: { codigo: codigo },
        });
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        if (pedido.estado.toString().toLowerCase() !== PedidoAnonimo_1.Estado.pendente) {
            throw new Error("O pedido não pode ser atualizado porque não está no estado 'pendente'");
        }
        // Excluindo o pedido
        await PedidoAnonimoRepository_1.pedidoAnonimoRepository.delete({ codigo: codigo });
        return res.status(202).json("pedido deletado");
    }
}
exports.PedidoAnonimoController = PedidoAnonimoController;
