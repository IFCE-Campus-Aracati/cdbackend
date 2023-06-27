"use strict";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const PedidoRepository_1 = require("../repositories/PedidoRepository");
const Pedido_entities_1 = require("../entities/Pedido.entities");
<<<<<<< HEAD
const Pedido_1 = require("../models/Pedido");
=======
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
class adminController {
    async readPedidos(req, res) {
        const { estado } = req.params;
<<<<<<< HEAD
        // console.log(estado)
        //retornar todos os pedidos
        const pedidos = Object.values(Pedido_1.Estado).find((enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase());
        // const pedidos = await pedidoRepository.find({
        //     where: {estado: estado,}
        // })
=======
        console.log(estado);
        //retornar todos os pedidos
        const pedidos = await PedidoRepository_1.pedidoRepository.find({
            where: { estado: estado, }
        });
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
        //nesse caso ele vai retornar toda a tabela
        //const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado)
        //e depois filtar apenas o que o usuario vai querer
        console.log(pedidos);
        return res.status(200).json(pedidos);
    }
    async updatePedidos(req, res) {
        const { id_pedido } = req.params;
        //vai pegar o id
<<<<<<< HEAD
        const { estado } = req.body;
        //pega o estado que quer trocar
        let pedidoRetornado = await PedidoRepository_1.pedidoRepository.findOneBy({ id_pedido: Number(id_pedido) });
        //pega a linha que vai ser alterada
        const pedido = await PedidoRepository_1.pedidoRepository.createQueryBuilder().update(Pedido_entities_1.Pedido).set({ estado }).where({ id_pedido: Number(id_pedido) }).execute();
=======
        const estado = req.body;
        //pega o estado que quer trocar
        let pedidoRetornado = await PedidoRepository_1.pedidoRepository.findOneBy({ id_pedido: Number(id_pedido) });
        //pega a linha que vai ser alterada
        const pedido = await PedidoRepository_1.pedidoRepository.createQueryBuilder().update(Pedido_entities_1.Pedido).set({ estado: estado })
            .where({ id_pedido: id_pedido })
            .execute();
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
        //faz alteracao do estado
        pedidoRetornado = await PedidoRepository_1.pedidoRepository.findOneBy({ id_pedido: Number(id_pedido) });
        //pedido ja alterado
        if (pedidoRetornado != null) {
            pedido.generatedMaps = [Object(estado)];
            pedido.raw = pedidoRetornado;
        }
        else {
            return res.status(404).json('pedido não encontrado');
        }
        //incluo no retorno a linha como era antes da alteracao
        return res.status(201).json(pedido);
    }
    async user(req, res) {
        const user = await UsuarioRepository_1.usuarioRepository.find();
<<<<<<< HEAD
=======
        console.log(user);
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
        return res.status(200).json(user);
    }
}
exports.adminController = adminController;
<<<<<<< HEAD
=======
=======
// import { Request, Response } from "express";
// import { pedidoRepository } from "../repositories/PedidoRepository";
// import { Pedido } from "../entities/Pedido.entities";
// import { Estado } from "../models/Pedido";
// import { usuarioRepository } from "../repositories/UsuarioRepository";
// export class adminController {
//     async readPedidos (req: Request, res: Response) {
//         const {estado} = req.params
//         console.log(estado)
//         //retornar todos os pedidos
//         const pedidos = await pedidoRepository.find({
//             where: {estado: estado,}
//         })
//         //nesse caso ele vai retornar toda a tabela
//         //const pedidoFiltrado = pedidos.filter((item) => String(item.estado) == estado)
//         //e depois filtar apenas o que o usuario vai querer
//         console.log(pedidos)
//         return res.status(200).json(pedidos)
//     }
//     async updatePedidos (req: Request, res: Response) {
//         const {id_pedido} = req.params
//         //vai pegar o id
//         const estado:Estado = req.body
//         //pega o estado que quer trocar
//         let pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
//        //pega a linha que vai ser alterada
//         const pedido = await pedidoRepository.createQueryBuilder().update(Pedido).set({estado: estado})
//         .where({ id_pedido: id_pedido })
//         .execute()
//         //faz alteracao do estado
//         pedidoRetornado = await pedidoRepository.findOneBy({id_pedido: Number(id_pedido)})
//         //pedido ja alterado
//         if(pedidoRetornado!=null)
//         {
//             pedido.generatedMaps = [Object(estado)]
//             pedido.raw = pedidoRetornado
//         } else {
//             return res.status(404).json('pedido não encontrado')
//         }
//         //incluo no retorno a linha como era antes da alteracao
//         return res.status(201).json(pedido)
//     }
//     async user (req: Request, res: Response) {
//         const user = await usuarioRepository.find()
//         console.log(user)
//         return res.status(200).json(user)
//     }
// }
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
