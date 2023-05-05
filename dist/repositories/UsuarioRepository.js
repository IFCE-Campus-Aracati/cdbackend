"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
const Usuario_entities_1 = require("../entities/Usuario.entities");
const data_source_1 = require("./../data-source");
const usuarioRepository = data_source_1.AppDataSource.getRepository(Usuario_entities_1.Usuario);
exports.usuarioRepository = usuarioRepository;
