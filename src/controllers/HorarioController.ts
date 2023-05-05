import { horarioRepository } from "./../repositories/HorarioRepository";

import { Request, Response } from "express";
// import {}
export class HorarioController {
  async createHorario(req: Request, res: Response) {
    const { dataInicio, dataFim, disponivel } = req.body;

    const newHorario = horarioRepository.create({
      dataInicio,
      dataFim,
      disponivel,
    });

    await horarioRepository.save(newHorario);

    return res.status(201).json(newHorario);
  }
}
