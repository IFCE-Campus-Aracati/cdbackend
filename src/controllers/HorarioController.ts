import { horarioRepository } from './../repositories/HorarioRepository';

import { Request, Response } from 'express';
// import {}
export class HorarioController {
    async createHorario(req: Request, res: Response){
        const {dataInicio, dataFim, Disponivel} = req.body

        try {
            const newHorario = horarioRepository.create({
                dataInicio,
                dataFim,
                Disponivel
            })

            await horarioRepository.save(newHorario)

            return res.status(201).json(newHorario)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error"})
            
        }
    }
}