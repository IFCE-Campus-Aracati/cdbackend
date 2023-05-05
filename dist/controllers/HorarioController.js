"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioController = void 0;
const HorarioRepository_1 = require("./../repositories/HorarioRepository");
// import {}
class HorarioController {
    async createHorario(req, res) {
        const { dataInicio, dataFim, disponivel } = req.body;
        const newHorario = HorarioRepository_1.horarioRepository.create({
            dataInicio,
            dataFim,
            disponivel,
        });
        await HorarioRepository_1.horarioRepository.save(newHorario);
        return res.status(201).json(newHorario);
    }
}
exports.HorarioController = HorarioController;
