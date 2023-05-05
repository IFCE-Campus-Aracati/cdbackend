export class HoraDisponivel {

  readonly id_hora: number;
  readonly dataInicio: Date;
  readonly dataFim: Date;
  readonly disponivel: boolean = false;
  readonly horas: HoraDisponivel[] | null;

  constructor(id_hora: number, dataInicio: Date, dataFim: Date, disponivel: boolean, horas: HoraDisponivel[] | null) {
    this.id_hora = id_hora
    this.dataInicio = dataInicio
    this.dataFim = dataFim
    this.disponivel = disponivel
    this.horas = horas
  }


}
