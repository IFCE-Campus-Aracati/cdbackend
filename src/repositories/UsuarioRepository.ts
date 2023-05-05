import { Usuario } from "../entities/Usuario.entities";
import { AppDataSource } from "./../data-source";


const usuarioRepository = AppDataSource.getRepository(Usuario);




export {usuarioRepository}