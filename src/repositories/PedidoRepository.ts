import { Pedido } from "../entities/Pedido.entities";
import { AppDataSource } from "./../data-source";
export const pedidoRepository = AppDataSource.getRepository(Pedido);
