import { Cargo } from "../entities/Cargo.entities";
import { AppDataSource } from "./../data-source";


export const cargoRepository = AppDataSource.getRepository(Cargo);
