import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pedidoAnonimoRepository } from "../repositories/PedidoAnonimoRepository";
import { PedidoAnonimo } from "../models/PedidoAnonimo";
import fs from "fs";
import { Estado } from "../models/Pedido";
export class PedidoAnonimoController {
  async createPedidoAnonimo(req: Request, res: Response) {
    try {
      // criar pedido anônimo
      const {
        material,
        maquina,
        cor,
        descricao,
        comentario,
        id_horaDisponivel,
      } = req.body;

      if(!req.file){
        throw new Error("arquivo não enviado");
      }

      const { filename: arquivo } = req.file;

      let estado: Estado = Estado.pendente;
      let codigo = bcrypt
        .hashSync(Date.now().toString(), 10)
        .replace(/\//g, "");


      const pedidoAnonimo = new PedidoAnonimo(
        material,
        maquina,
        estado,
        arquivo,
        cor,
        descricao,
        comentario,
        codigo,
        id_horaDisponivel,
        null
      );

      const novoPedidoAnonimo = pedidoAnonimoRepository.create(pedidoAnonimo);
      await pedidoAnonimoRepository.save(novoPedidoAnonimo);

      return res.status(201).json(novoPedidoAnonimo);
    } catch (error) {
      // Trate o erro aqui, você pode enviar uma resposta de erro personalizada ou executar outras ações necessárias

      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao criar o pedido" });
    }
  }
  
  async listPedidosAnonimosByCodigo(req: Request, res: Response) {
    try {
      const { codigo } = req.params;

      const pedidos = await pedidoAnonimoRepository.find({ where: { codigo } });
      return res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updatePedido(req: Request, res: Response) {
    try {
      const { codigo } = req.params;
      const {
        material,
        maquina,
        cor,
        descricao,
        comentario,
        id_horaDisponivel,
      } = req.body;

      if(!req.file){
        throw new Error("arquivo não enviado");
      }

      const { filename: arquivo } = req.file;

      const pedido = await pedidoAnonimoRepository.findOne({
        where: { codigo: codigo },
      });

      if (!pedido) {
        throw new Error("Pedido não encontrado");
      }

      if (pedido.estado.toString().toLowerCase() !== Estado.pendente) {
        throw new Error(
          "O pedido não pode ser atualizado porque não está no estado 'pendente'"
        );
      }


      pedido.material = material || pedido.material;
      pedido.maquina = maquina || pedido.maquina;
      pedido.cor = cor || cor;
      pedido.descricao = descricao || descricao;
      pedido.comentario = comentario || comentario;
      pedido.id_horaDisponivel = Number(id_horaDisponivel) || id_horaDisponivel;
      pedido.arquivo = arquivo; // Verificação adicional para garantir que arquivo seja um Buffer

      await pedidoAnonimoRepository.save(pedido);

      return res.status(200).json(pedido);
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar o pedido" });
    }
  }

  async deletePedido(req: Request, res: Response) {
    try {
      const { codigo } = req.params;

      // Verificando se o pedido existe e se o estado é "pendente"
      const pedido = await pedidoAnonimoRepository.findOne({
        where: { codigo: codigo },
      });

      if (!pedido) {
        throw new Error("Pedido não encontrado");
      }

      // Excluindo o pedido
      await pedidoAnonimoRepository.delete({ codigo: codigo });

      return res.status(202).json("pedido deletado");
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao deletar o pedido" });
    }
  }
}
