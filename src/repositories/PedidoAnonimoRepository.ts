import { PedidoAnonimo } from "./../entities/PedidoAnonimo";
import { AppDataSource } from "./../data-source";
export const pedidoAnonimoRepository = AppDataSource.getRepository(PedidoAnonimo);
