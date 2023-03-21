import { Pedido } from "./../entities/Pedido";
import { AppDataSource } from "./../data-source";
export const pedidoRepository = AppDataSource.getRepository(Pedido);
