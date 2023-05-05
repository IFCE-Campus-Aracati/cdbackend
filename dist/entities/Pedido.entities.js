"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prioridade = exports.Estado = exports.Pedido = void 0;
const HoraDisponivel_entities_1 = require("./HoraDisponivel.entities");
const Usuario_entities_1 = require("./Usuario.entities");
const typeorm_1 = require("typeorm");
let Pedido = class Pedido {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pedido.prototype, "id_pedido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", Number)
], Pedido.prototype, "prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "maquina", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Buffer)
], Pedido.prototype, "arquivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "medida", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => HoraDisponivel_entities_1.HoraDisponivel, (horaDisponivel) => horaDisponivel.horas),
    (0, typeorm_1.JoinColumn)({ name: "id_horaDisponivel" }),
    __metadata("design:type", HoraDisponivel_entities_1.HoraDisponivel)
], Pedido.prototype, "id_horaDisponivel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_entities_1.Usuario, (usuario) => usuario.autorPedido),
    (0, typeorm_1.JoinColumn)({ name: "id_autorPedido" }),
    __metadata("design:type", Usuario_entities_1.Usuario)
], Pedido.prototype, "id_autorPedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_entities_1.Usuario, (usuario) => usuario.autorAutorizador),
    (0, typeorm_1.JoinColumn)({ name: "id_autorAutorizador" }),
    __metadata("design:type", Usuario_entities_1.Usuario)
], Pedido.prototype, "id_autorAutorizador", void 0);
Pedido = __decorate([
    (0, typeorm_1.Entity)("pedidos")
], Pedido);
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
