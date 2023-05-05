import { HoraDisponivel } from "../entities/HoraDisponivel.entities";
import { AppDataSource } from "./../data-source";

export const horarioRepository = AppDataSource.getRepository(HoraDisponivel);
