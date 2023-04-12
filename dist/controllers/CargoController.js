"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoController = void 0;
const CargoRepository_1 = require("./../repositories/CargoRepository");
class CargoController {
    async createCargo(req, res) {
        // criar cargo
        const { cargo } = req.body;
        //validação básica
        if (!cargo) {
            return res.status(400).json({ message: "O cargo é obrigatório" });
        }
        const newCargo = CargoRepository_1.cargoRepository.create({ cargo });
        await CargoRepository_1.cargoRepository.save(newCargo);
        return res.status(201).json(newCargo);
    }
}
exports.CargoController = CargoController;
