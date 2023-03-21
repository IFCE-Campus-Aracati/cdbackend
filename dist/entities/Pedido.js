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
exports.Pedido = void 0;
const HoraDisponivel_1 = require("./HoraDisponivel");
const Usuario_1 = require("./Usuario");
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
    __metadata("design:type", String)
], Pedido.prototype, "prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "maquina", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bytea', nullable: true }),
    __metadata("design:type", Buffer)
], Pedido.prototype, "arquivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "medida", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => HoraDisponivel_1.HoraDisponivel, (horaDisponivel) => horaDisponivel.horas),
    (0, typeorm_1.JoinColumn)({ name: "id_horaDisponivel" }),
    __metadata("design:type", HoraDisponivel_1.HoraDisponivel)
], Pedido.prototype, "id_horaDisponivel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (usuario) => usuario.AutorPedido),
    (0, typeorm_1.JoinColumn)({ name: "id_autorPedido" }),
    __metadata("design:type", Usuario_1.Usuario)
], Pedido.prototype, "id_autorPedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (usuario) => usuario.AutorAutorizador),
    (0, typeorm_1.JoinColumn)({ name: "id_autorAutorizador" }),
    __metadata("design:type", Usuario_1.Usuario)
], Pedido.prototype, "id_autorAutorizador", void 0);
Pedido = __decorate([
    (0, typeorm_1.Entity)("pedidos")
], Pedido);
exports.Pedido = Pedido;
