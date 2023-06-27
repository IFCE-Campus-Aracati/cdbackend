import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/PedidoRepository";
import { Estado } from "../models/Pedido";
import { Pedido } from "../entities/Pedido.entities";
import { BadRequestError } from "../helpers/api-erros";
import * as jwt from "jsonwebtoken";
import fs from "fs";

export class adminPedidoController {
  async readPedidos(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }
    const { estado } = req.params;

    //se estiver estado ele retorna todos aqueles com estado que tiver
    if (estado != null) {
      const estadoEnum = Object.values(Estado).find(
        (enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase()
      );

      // Obtendo os parâmetros de paginação da query string
      const { page, pageSize } = req.query;
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSizeNumber = parseInt(pageSize as string, 10) || 10;

      const pedidos = await pedidoRepository
        .createQueryBuilder("pedido")
        .where("pedido.estado = :estado", { estado: estadoEnum })
        .skip((pageNumber - 1) * pageSizeNumber)
        .take(pageSizeNumber)
        .getMany();

      // //transforma string em enum
      // const estadoEnum: Estado = Estado[estado as keyof typeof Estado];
      // const pedidos = await pedidoRepository.find({where: {estado: estadoEnum}})
      return res.status(200).json(pedidos);
    } else {
      // Caso não tenha passado nada, retorna toda a tabela de pedidos com paginação de 10 em 10
      const { page } = req.query;
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSizeNumber = 10;

      const pedidos = await pedidoRepository
        .createQueryBuilder("pedido")
        .skip((pageNumber - 1) * pageSizeNumber)
        .take(pageSizeNumber)
        .getMany();
      return res.status(200).json(pedidos);
    }
  }

  async updatePedidos(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { id_pedido } = req.params;
    //vai pegar o id
    const {
      material,
      maquina,
      estado,
      cor,
      descricao,
      comentario,
      id_horaDisponivel,
    } = req.body;


    if (!authorization) {
      throw new BadRequestError("nao autorizado");
    }
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };

    //pega o estado que quer trocar
    let pedidoRetornado = await pedidoRepository.findOneBy({
      id_pedido: Number(id_pedido),
    });
    const pedido = await pedidoRepository
      .createQueryBuilder()
      .update(Pedido)
      .set({
        material: material,
        estado: estado,
        maquina: maquina,
        cor: cor,
        descricao: descricao,
        comentario: comentario,
        id_horaDisponivel: id_horaDisponivel,
        id_autorAutorizador: decodedToken.id,
      })
      .where({ id_pedido: id_pedido })
      .execute();

    //faz alteracao do estado
    pedidoRetornado = await pedidoRepository.findOneBy({
      id_pedido: Number(id_pedido),
    });
    //pedido ja alterado

    if (pedidoRetornado != null) {
      pedido.generatedMaps = [Object(estado)];
      pedido.raw = pedidoRetornado;
    } else {
      return res.status(404).json("pedido não encontrado");
    }

    //incluo no retorno a linha como era antes da alteracao

    return res.status(201).json(pedido);
  }
  async deletePedido(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const { id_pedido } = req.params;

      if (!authorization) {
        throw new Error("Não autorizado");
      }
      // Verificando se o pedido existe
      const pedido = await pedidoRepository.findOne({
        where: { id_pedido: Number(id_pedido) },
      });

      if (!pedido) {
        throw new Error("Pedido não encontrado");
      }

      // Excluindo o pedido
      await pedidoRepository.delete({ id_pedido: parseInt(id_pedido) });

      return res.status(202).json("pedido deletado");
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao deletar o pedido" });
    }
  }
}
