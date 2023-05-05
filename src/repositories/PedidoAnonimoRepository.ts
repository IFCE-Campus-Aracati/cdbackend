import { PedidoAnonimo } from "../entities/PedidoAnonimo.entites";
import { AppDataSource } from "./../data-source";
export const pedidoAnonimoRepository = AppDataSource.getRepository(PedidoAnonimo);
