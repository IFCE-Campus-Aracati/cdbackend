import { error } from "console";
import { Pedido, Estado } from "../models/Pedido";
import { pedidoRepository } from "./../repositories/PedidoRepository";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";


export class PedidoController {
  async createPedido(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if(!req.file){
        throw new Error("arquivo não enviado");
      }
      const { filename: arquivo } = req.file;

      if (!authorization) {
        throw new Error("Não autorizado");
      }

      // Verificando se o token existe e obtendo o ID do usuário
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
        id: number;
      };
      const { id } = decodedToken;
      // Dados do pedido

      const {
        material,
        maquina,
        cor,
        descricao,
        comentario,
        id_horaDisponivel,
        prioridade,
      } = req.body;
      let estado: Estado = Estado.pendente;

      const pedido = new Pedido(
        material,
        prioridade,
        maquina,
        arquivo,
        cor,
        descricao,
        comentario,
        Number(id_horaDisponivel),
        id,
        null
      );

      const novoPedido = pedidoRepository.create(pedido);

      await pedidoRepository.save(novoPedido);

      return res.status(201).json(novoPedido);
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao criar o pedido" });
    }
  }

  async getPedidosByUsuario(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        throw new Error("Não autorizado");
      }

      // Verificando se o token existe e obtendo o ID do usuário
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
        id: number;
      };
      const { id } = decodedToken;
      console.log(id);

      // Obtendo os parâmetros de paginação da query string
      const { page, pageSize } = req.query;
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSizeNumber = parseInt(pageSize as string, 10) || 10;

      // Obtendo os pedidos vinculados ao usuário logado com paginação
      const pedidos = await pedidoRepository
        .createQueryBuilder("pedido")
        .where("pedido.id_autorPedido = :id_autorPedido", { id_autorPedido: id })
        .skip((pageNumber - 1) * pageSizeNumber)
        .take(pageSizeNumber)
        .getMany();

      return res.status(200).json(pedidos);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao buscar os pedidos" });
    }
  }

  async updatePedido(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const { id_pedido } = req.params;

      if (!authorization) {
        throw new Error("Não autorizado");
      }

      if(!req.file){
        throw new Error("arquivo não enviado");
      }
      const { filename: arquivo } = req.file;
      // Verificando se o token existe e obtendo o ID do usuário
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
        id: number;
      };
      const { id } = decodedToken;

      // Verificar se o pedido pertence ao autor
      const pedido = await pedidoRepository.findOne({
        where: { id_pedido: parseInt(id_pedido), id_autorPedido: id },
      });

      if (!pedido) {
        throw new Error("Pedido não encontrado ou não autorizado");
      }

      // Atualizar os dados do pedido
      const {
        material,
        maquina,
        cor,
        descricao,
        comentario,
        id_horaDisponivel,
        prioridade,
      } = req.body;


      pedido.material = material || material;
      pedido.maquina = maquina || maquina;
      pedido.cor = cor || cor;
      pedido.descricao = descricao || descricao;
      pedido.comentario = comentario || comentario;
      pedido.id_horaDisponivel = Number(id_horaDisponivel) || id_horaDisponivel;
      pedido.prioridade = prioridade || prioridade;
      pedido.arquivo = arquivo; // Verificação adicional para garantir que arquivo seja um Buffer

      await pedidoRepository.save(pedido);

      return res.status(200).json(pedido);
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar o pedido" });
    }
  }

  async deletePedido(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { id_pedido } = req.params;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // Verificando se o token existe e obtendo o ID do usuário
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    try {
      const result = await pedidoRepository.delete({
        id_pedido: parseInt(id_pedido),
        id_autorPedido: id,
      });

      if (result.affected === 0) {
        throw new Error("Pedido não encontrado ou não autorizado");
      }

      return res.status(202).json("Pedido deletado");
    } catch (error) {
      throw new Error("Ocorreu um erro ao excluir o pedido");
    }
  }

  async getPedidosByEstado(req: Request, res: Response) {
    const { estado } = req.params;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    // Verificando se o token existe e obtendo o ID do usuário
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PASS ?? "") as {
      id: number;
    };
    const { id } = decodedToken;

    try {
      // Verifique se o estado fornecido é válido
      const estadoEnum = Object.values(Estado).find(
        (enumEstado) => enumEstado.toLowerCase() === estado.toLowerCase()
      );

      if (!estadoEnum) {
        throw new Error("Estado inválido");
      }

      // Obtendo os parâmetros de paginação da query string
      const { page, pageSize } = req.query;
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSizeNumber = parseInt(pageSize as string, 10) || 10;

      const pedidos = await pedidoRepository
        .createQueryBuilder("pedido")
        .where("pedido.id_autorPedido = :id_autorPedido", {
          id_autorPedido: id,
        })
        .andWhere("pedido.estado = :estado", { estado: estadoEnum })
        .skip((pageNumber - 1) * pageSizeNumber)
        .take(pageSizeNumber)
        .getMany();

      return res.status(200).json(pedidos);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
}
