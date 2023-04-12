import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pedidoAnonimoRepository } from "../repositories/PedidoAnonimoRepository";
export class PedidoAnonimoController {
  async createPedidoAnonimo(req: Request, res: Response) {
    // criar pedido anônimo
    const {
      material,
      prioridade,
      maquina,
      estado,
      arquivo,
      medida,
      codigo,
      id_horaDisponivel,
      id_autorAutorizadorAnonimo,
    } = req.body;

    // if(!pedido){
    //   return res.status(404).json({message: 'Usuário não existe' }) //refazer a verificação
    // }
    const novoPedido = pedidoAnonimoRepository.create({
      material,
      maquina,
      estado,
      arquivo,
      medida,
      codigo: bcrypt.hashSync(Date.now().toString(), 10), // gerando um hash a partir do timestamp atual
      id_horaDisponivel,
      id_autorAutorizadorAnonimo,
    });

    await pedidoAnonimoRepository.save(novoPedido);

    return res.status(201).json(novoPedido);
  }
}
