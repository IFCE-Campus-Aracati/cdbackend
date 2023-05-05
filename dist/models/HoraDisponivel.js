"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraDisponivel = void 0;
class HoraDisponivel {
    constructor(id_hora, dataInicio, dataFim, disponivel, horas) {
        this.disponivel = false;
        this.id_hora = id_hora;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.disponivel = disponivel;
        this.horas = horas;
    }
}
exports.HoraDisponivel = HoraDisponivel;
