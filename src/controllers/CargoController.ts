import { cargoRepository } from "./../repositories/CargoRepository";
import { Response, Request } from "express";
import { BadRequestError } from "../helpers/api-erros";

export class CargoController {
  async createCargo(req: Request, res: Response) {
    const { cargo } = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    //validação básica
    if (!cargo) {
      return res.status(400).json({message: "O cargo é obrigatório"});
    }

    try {
      const newCargo = cargoRepository.create({ cargo });

      await cargoRepository.save(newCargo);

      return res.status(201).json(newCargo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async listCargos(req: Request, res: Response) {
    try {
      const cargos = await cargoRepository.find();
  
      return res.status(200).json(cargos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  async getCargoById(req: Request, res: Response) {
    const { id_cargo } = req.params;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    try {
      const cargo = await cargoRepository.findOne({
        where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
      });
  
      if (!cargo) {
        return res.status(404).json({ message: "Cargo não encontrado" });
      }
  
      return res.status(200).json(cargo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  async updateCargo(req: Request, res: Response) {
    const { id_cargo } = req.params;
    const { cargo } = req.body;
    const { authorization } = req.headers;
  
    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }
  
    // Validação básica
    if (!cargo) {
      return res.status(400).json({ message: "O cargo é obrigatório" });
    }
  
    try {
      const cargoToUpdate = await cargoRepository.findOne({
        where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
      });
  
      if (!cargoToUpdate) {
        return res.status(404).json({ message: "Cargo não encontrado" });
      }
  
      cargoToUpdate.cargo = cargo || cargoToUpdate.cargo;
  
      await cargoRepository.save(cargoToUpdate);
  
      return res.status(200).json(cargoToUpdate);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  async deleteCargo(req: Request, res: Response) {
    const { id_cargo } = req.params;
    const { authorization } = req.headers;
  
    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }
  
    try {
      const cargo = await cargoRepository.findOne({
        where: { id_cargo: parseInt(id_cargo) }, // Convertendo para número
      });
  
  
      if (!cargo) {
        return res.status(404).json({ message: "Cargo não encontrado" });
      }
  
      await cargoRepository.delete(id_cargo);
  
      return res.status(200).json({ message: "Cargo excluído com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
}
