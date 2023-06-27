"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estado = exports.PedidoAnonimo = void 0;
class PedidoAnonimo {
    constructor(id_pedidoAnonimo, material, maquina, estado, arquivo, medida, codigo, id_horaDisponivel, id_autorAutorizadorAnonimo) {
        this.id_pedidoAnonimo = id_pedidoAnonimo;
        this.material = material;
        this.maquina = maquina;
        this.estado = Estado.pendente;
        this.arquivo = arquivo;
        this.medida = medida;
        this.codigo = codigo;
        this.id_horaDisponivel = id_horaDisponivel;
        this.id_autorAutorizadorAnonimo = id_autorAutorizadorAnonimo;
    }
    get Material() {
        return this.material;
    }
    get Maquina() {
        return this.maquina;
    }
    get Estado() {
        return this.estado;
    }
    get Arquivo() {
        return this.arquivo;
    }
    get Medida() {
        return this.medida;
    }
    get Id_horaDisponivel() {
        return this.id_horaDisponivel;
    }
    get Id_autorAutorizador() {
        return this.Id_autorAutorizador;
    }
    setEstado(estado) {
        if (this.estado == Estado.pendente &&
            estado == (Estado.aprovado || Estado.reprovado)) {
            this.estado = estado;
        }
        else if (this.estado == Estado.aprovado && estado == Estado.concluido) {
            this.estado = estado;
        }
        else if (this.estado == Estado.concluido) {
            throw "pedido ja concluido, nao pode ser alterado";
        }
        else {
            throw "escolha um estado valido";
        }
    }
}
exports.PedidoAnonimo = PedidoAnonimo;
var Estado;
(function (Estado) {
    Estado["pendente"] = "pendente";
    Estado["aprovado"] = "aprovado";
    Estado["concluido"] = "concluido";
    Estado["reprovado"] = "reprovado";
})(Estado = exports.Estado || (exports.Estado = {}));
