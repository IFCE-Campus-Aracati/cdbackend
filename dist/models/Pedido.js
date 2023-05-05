"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prioridade = exports.Estado = exports.Pedido = void 0;
class Pedido {
    constructor(id_pedido, material, prioridade, maquina, estado, arquivo, medida, id_horaDisponivel, id_autorPedido, id_autorAutorizador) {
        this.id_pedido = id_pedido;
        this.material = material;
        this.prioridade = prioridade;
        this.maquina = maquina;
        this.estado = estado;
        this.arquivo = arquivo;
        this.medida = medida;
        this.id_horaDisponivel = id_horaDisponivel;
        this.id_autorPedido = id_autorPedido;
        this.id_autorAutorizador = id_autorAutorizador;
    }
    get Id() {
        return this.id_pedido;
    }
    get Material() {
        return this.material;
    }
    get Prioridade() {
        return this.prioridade;
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
    get Id_autorPedido() {
        return this.id_autorPedido;
    }
    get Id_autorAutorizador() {
        return this.id_autorAutorizador;
    }
}
exports.Pedido = Pedido;
var Estado;
(function (Estado) {
    Estado[Estado["pendete"] = 0] = "pendete";
    Estado[Estado["aprovado"] = 1] = "aprovado";
    Estado[Estado["concluido"] = 2] = "concluido";
    Estado[Estado["reprovado"] = 3] = "reprovado";
})(Estado = exports.Estado || (exports.Estado = {}));
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["baixa"] = 0] = "baixa";
    Prioridade[Prioridade["media"] = 1] = "media";
    Prioridade[Prioridade["alta"] = 2] = "alta";
})(Prioridade = exports.Prioridade || (exports.Prioridade = {}));
