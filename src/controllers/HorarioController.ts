import { BadRequestError } from '../helpers/api-erros';
import { horarioRepository } from './../repositories/HorarioRepository';

import { Request, Response } from 'express';
// import {}
export class HorarioController {
    async createHorario(req: Request, res: Response){
        const {dataInicio, dataFim, disponivel} = req.body

    try {
      const newHorario = horarioRepository.create({
        dataInicio, // default = false
        dataFim,
        disponivel,
      });

      await horarioRepository.save(newHorario);

      return res.status(201).json(newHorario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async listHorarios(req: Request, res: Response) {
    try {
      const horarios = await horarioRepository.find();

      return res.status(200).json(horarios);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getHorarioById(req: Request, res: Response) {
    const { id_horario } = req.params;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    try {
      const horario = await horarioRepository.findOne({
        where: { id_hora: parseInt(id_horario) }, // Convertendo para número
      });
  
      if (!horario) {
        return res.status(404).json({ message: 'Horário não encontrado' });
      }
  
      return res.status(200).json(horario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  async updateHorario(req: Request, res: Response) {
    const { id_horario } = req.params;
    const { dataInicio, dataFim, disponivel } = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    try {
      

      const horario = await horarioRepository.findOne({
        where: { id_hora: parseInt(id_horario) }, // Convertendo para número
      });

      if (!horario) {
        return res.status(404).json({ message: "Horário não encontrado" });
      }

      horario.dataInicio = dataInicio || horario.dataInicio;
      horario.dataFim = dataFim || horario.dataFim;
      horario.disponivel = disponivel || horario.disponivel;

      await horarioRepository.save(horario);

      return res.status(200).json(horario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

    async deleteHorario(req: Request, res: Response) {
      const { id_horario } = req.params;
      const { authorization } = req.headers;

      if (!authorization) {
        throw new BadRequestError("Não autorizado");
      }
      try {
        const horario = await horarioRepository.findOne({
          where: { id_hora: parseInt(id_horario) }, // Convertendo para número
        });
  

        if (!horario) {
          return res.status(404).json({ message: 'Horário não encontrado' });
        }

        await horarioRepository.delete(id_horario);

        return res.status(200).json({ message: 'Horário excluído com sucesso' });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
}
