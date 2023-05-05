"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.horarioRepository = void 0;
const HoraDisponivel_entities_1 = require("../entities/HoraDisponivel.entities");
const data_source_1 = require("./../data-source");
exports.horarioRepository = data_source_1.AppDataSource.getRepository(HoraDisponivel_entities_1.HoraDisponivel);
