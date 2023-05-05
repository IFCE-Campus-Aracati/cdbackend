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
exports.HoraDisponivel = void 0;
const Pedido_1 = require("./Pedido");
const typeorm_1 = require("typeorm");
let HoraDisponivel = class HoraDisponivel {
    constructor(id_hora, dataInicio, dataFim, disponivel, horas) {
        this.disponivel = false;
        this.id_hora = id_hora;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.disponivel = disponivel;
        this.horas = horas;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HoraDisponivel.prototype, "id_hora", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", Date)
], HoraDisponivel.prototype, "dataInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", Date)
], HoraDisponivel.prototype, "dataFim", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], HoraDisponivel.prototype, "disponivel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Pedido_1.Pedido, (pedido) => pedido.id_horaDisponivel),
    __metadata("design:type", Object)
], HoraDisponivel.prototype, "horas", void 0);
HoraDisponivel = __decorate([
    (0, typeorm_1.Entity)("horaDisponivel"),
    __metadata("design:paramtypes", [Number, Date, Date, Boolean, Object])
], HoraDisponivel);
exports.HoraDisponivel = HoraDisponivel;
