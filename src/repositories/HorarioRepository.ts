import { HoraDisponivel } from "./../entities/HoraDisponivel";
import { AppDataSource } from "./../data-source";
export const horarioRepository = AppDataSource.getRepository(HoraDisponivel);
