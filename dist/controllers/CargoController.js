"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoController = void 0;
const CargoRepository_1 = require("./../repositories/CargoRepository");
const api_erros_1 = require("../helpers/api-erros");
class CargoController {
    async createCargo(req, res) {
        const { cargo } = req.body;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        //validação básica
        if (!cargo) {
            return res.status(400).json({ message: "O cargo é obrigatório" });
        }
        try {
            const newCargo = CargoRepository_1.cargoRepository.create({ cargo });
            await CargoRepository_1.cargoRepository.save(newCargo);
            return res.status(201).json(newCargo);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async listCargos(req, res) {
        try {
            const cargos = await CargoRepository_1.cargoRepository.find();
            return res.status(200).json(cargos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getCargoById(req, res) {
        const { id_cargo } = req.params;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        try {
            const cargo = await CargoRepository_1.cargoRepository.findOne({
                where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
            });
            if (!cargo) {
                return res.status(404).json({ message: "Cargo não encontrado" });
            }
            return res.status(200).json(cargo);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async updateCargo(req, res) {
        const { id_cargo } = req.params;
        const { cargo } = req.body;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        // Validação básica
        if (!cargo) {
            return res.status(400).json({ message: "O cargo é obrigatório" });
        }
        try {
            const cargoToUpdate = await CargoRepository_1.cargoRepository.findOne({
                where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
            });
            if (!cargoToUpdate) {
                return res.status(404).json({ message: "Cargo não encontrado" });
            }
            cargoToUpdate.cargo = cargo || cargoToUpdate.cargo;
            await CargoRepository_1.cargoRepository.save(cargoToUpdate);
            return res.status(200).json(cargoToUpdate);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async deleteCargo(req, res) {
        const { id_cargo } = req.params;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.BadRequestError("Não autorizado");
        }
        try {
            const cargo = await CargoRepository_1.cargoRepository.findOne({
                where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
            });
            if (!cargo) {
                return res.status(404).json({ message: "Cargo não encontrado" });
            }
            await CargoRepository_1.cargoRepository.delete(id_cargo);
            return res.status(200).json({ message: "Cargo excluído com sucesso" });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.CargoController = CargoController;
