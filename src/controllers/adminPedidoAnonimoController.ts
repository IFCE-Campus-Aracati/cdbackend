
import { Request, Response } from "express";
import { pedidoAnonimoRepository } from "../repositories/PedidoAnonimoRepository";
import { PedidoAnonimo } from "../models/PedidoAnonimo";
import { Estado } from "../models/Pedido";
import fs from "fs";
import * as jwt from "jsonwebtoken";

export class adminPedidoAnonimoController {
  async listPedidosAnonimos(req: Request, res: Response) {
    try {
      // Obtendo os parâmetros de paginação da query string
      const { page, pageSize } = req.query;
      const pageNumber = parseInt(page as string, 10) || 1;
      const pageSizeNumber = parseInt(pageSize as string, 10) || 10;

      const [pedidos, totalCount] = await pedidoAnonimoRepository.findAndCount({
        skip: (pageNumber - 1) * pageSizeNumber,
        take: pageSizeNumber,
      });

      return res.status(200).json({
        pedidos,
        totalCount,
        currentPage: pageNumber,
        pageSize: pageSizeNumber,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
    // async listPedidosAnonimos(req: Request, res: Response) {
    //     try {
    //       const pedidos = await pedidoAnonimoRepository.find();
    
    //       return res.status(200).json(pedidos);
    //     } catch (error) {
    //       console.log(error);
    //       return res.status(500).json({ message: "Internal Server Error" });
    //     }
    // }

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
          pedido.id_autorAutorizadorAnonimo = id || id

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
    
          // Verificando se o pedido existe 
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
            console.log(error)
          return res
            .status(500)
            .json({ error: "Ocorreu um erro ao deletar o pedido" });
        }
      }
}