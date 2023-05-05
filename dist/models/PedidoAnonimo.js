"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoAnonimo = void 0;
class PedidoAnonimo {
    constructor(id_pedidoAnonimo, material, maquina, estado, arquivo, medida, codigo, id_horaDisponivel, id_autorAutorizadorAnonimo) {
        this.id_pedidoAnonimo = id_pedidoAnonimo;
        this.material = material;
        this.maquina = maquina;
        this.estado = estado;
        this.arquivo = arquivo;
        this.medida = medida;
        this.codigo = codigo;
        this.id_horaDisponivel = id_horaDisponivel;
        this.id_autorAutorizadorAnonimo = id_autorAutorizadorAnonimo;
    }
}
exports.PedidoAnonimo = PedidoAnonimo;
