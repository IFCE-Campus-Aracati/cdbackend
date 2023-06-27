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
exports.PedidoAnonimo = exports.Estado = void 0;
const HoraDisponivel_entities_1 = require("./HoraDisponivel.entities");
const Usuario_entities_1 = require("./Usuario.entities");
const typeorm_1 = require("typeorm");
var Estado;
(function (Estado) {
    Estado[Estado["pendente"] = 0] = "pendente";
    Estado[Estado["aprovado"] = 1] = "aprovado";
    Estado[Estado["concluido"] = 2] = "concluido";
    Estado[Estado["reprovado"] = 3] = "reprovado";
})(Estado = exports.Estado || (exports.Estado = {}));
let PedidoAnonimo = class PedidoAnonimo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PedidoAnonimo.prototype, "id_pedidoAnonimo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PedidoAnonimo.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PedidoAnonimo.prototype, "maquina", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", enum: Estado }),
    __metadata("design:type", String)
], PedidoAnonimo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longblob", nullable: true }) // ainda não foi rodado no banco
    ,
    __metadata("design:type", Object)
], PedidoAnonimo.prototype, "arquivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PedidoAnonimo.prototype, "medida", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PedidoAnonimo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => HoraDisponivel_entities_1.HoraDisponivel, (horaDisponivel) => horaDisponivel.horas),
    (0, typeorm_1.JoinColumn)({ name: "id_horaDisponivel" }),
    __metadata("design:type", HoraDisponivel_entities_1.HoraDisponivel)
], PedidoAnonimo.prototype, "id_horaDisponivel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_entities_1.Usuario, (usuario) => usuario.autorAutorizadorAnonimo),
    (0, typeorm_1.JoinColumn)({ name: "id_autorAutorizadorAnonimo" }),
    __metadata("design:type", Usuario_entities_1.Usuario)
], PedidoAnonimo.prototype, "id_autorAutorizadorAnonimo", void 0);
PedidoAnonimo = __decorate([
    (0, typeorm_1.Entity)("pedidosAnonimo")
], PedidoAnonimo);
exports.PedidoAnonimo = PedidoAnonimo;
