import { cargoRepository } from "./../repositories/CargoRepository";
import { Response, Request } from "express";
export class CargoController {
  async createCargo(req: Request, res: Response) {
    // criar cargo
    const { cargo } = req.body;

    //validação básica
    if (!cargo) {
      return res.status(400).json({ message: "O cargo é obrigatório" });
    }

    const newCargo = cargoRepository.create({ cargo });

    await cargoRepository.save(newCargo);

    return res.status(201).json(newCargo);
  }
}
