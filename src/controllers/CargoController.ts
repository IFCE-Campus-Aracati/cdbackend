import { cargoRepository } from "./../repositories/CargoRepository";
import { Response, Request } from "express";
export class CargoController {
  async createCargo(req: Request, res: Response) {
    // criar cargo
    const { cargo } = req.body;

    //validação básica
    if (!cargo) {
      return res.status(400).json({message: "O cargo é obrigatório"});
    }

    try {
      const newCargo = cargoRepository.create({ cargo });

      await cargoRepository.save(newCargo)
      
      return res.status(201).json(newCargo)
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
