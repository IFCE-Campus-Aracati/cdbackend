import { Cargo } from "./../entities/Cargo";
import { AppDataSource } from "./../data-source";
export const cargoRepository = AppDataSource.getRepository(Cargo);
