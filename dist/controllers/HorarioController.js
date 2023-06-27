"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioController = void 0;
const HorarioRepository_1 = require("./../repositories/HorarioRepository");
const api_erros_1 = require("../helpers/api-erros");
class HorarioController {
    async createHorario(req, res) {
        const { dataInicio, dataFim, disponivel } = req.body;
        try {
            const newHorario = HorarioRepository_1.horarioRepository.create({
                dataInicio,
                dataFim,
                disponivel,
            });
            await HorarioRepository_1.horarioRepository.save(newHorario);
            return res.status(201).json(newHorario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async listHorarios(req, res) {
        try {
            const horarios = await HorarioRepository_1.horarioRepository.find();
            return res.status(200).json(horarios);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getHorarioById(req, res) {
        const { id_horario } = req.params;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        try {
            const horario = await HorarioRepository_1.horarioRepository.findOne({
                where: { id_hora: parseInt(id_horario) }, // Convertendo para número
            });
            if (!horario) {
                return res.status(404).json({ message: 'Horário não encontrado' });
            }
            return res.status(200).json(horario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateHorario(req, res) {
        const { id_horario } = req.params;
        const { dataInicio, dataFim, disponivel } = req.body;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        try {
            const horario = await HorarioRepository_1.horarioRepository.findOne({
                where: { id_hora: parseInt(id_horario) }, // Convertendo para número
            });
            if (!horario) {
                return res.status(404).json({ message: "Horário não encontrado" });
            }
            horario.dataInicio = dataInicio || horario.dataInicio;
            horario.dataFim = dataFim || horario.dataFim;
            horario.disponivel = disponivel || horario.disponivel;
            await HorarioRepository_1.horarioRepository.save(horario);
            return res.status(200).json(horario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async deleteHorario(req, res) {
        const { id_horario } = req.params;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        try {
            const horario = await HorarioRepository_1.horarioRepository.findOne({
                where: { id_hora: parseInt(id_horario) }, // Convertendo para número
            });
            if (!horario) {
                return res.status(404).json({ message: 'Horário não encontrado' });
            }
            await HorarioRepository_1.horarioRepository.delete(id_horario);
            return res.status(200).json({ message: 'Horário excluído com sucesso' });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
exports.HorarioController = HorarioController;
