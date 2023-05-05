import { Pedido } from "../entities/Pedido.entities";
import { pedidoRepository } from "./../repositories/PedidoRepository";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
// import { Usuario } from "../entities/Usuario";
export class PedidoController {
  async createPedido(req: Request, res: Response) {
    // criar pedido
    const {
      material,
      prioridade,
      maquina,
      estado,
      arquivo,
      medida,
      id_horaDisponivel,
      id_autorAutorizador,
    } = req.body;

    const { id_autorPedido } = req.params;
    
      const pedido = await pedidoRepository.findOneBy({
        id_pedido: Number(id_autorPedido),
      });

      if (!pedido) { 
        throw new BadRequestError("Pedido não existe");
      }

      const novoPedido = pedidoRepository.create({
        material,
        prioridade,
        maquina,
        estado,
        arquivo,
        medida,
        id_autorPedido: { id_usuario: Number(id_autorPedido) }, // corrigido aqui
        id_autorAutorizador,
        id_horaDisponivel: { id_hora: id_horaDisponivel }, // corrigido aqui
      });

      await pedidoRepository.save(novoPedido);

      return res.status(201).json(novoPedido);
    
  }
  

  async updatePedido(req: Request, res: Response) {
    // const {id_pedido}
    try {
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
