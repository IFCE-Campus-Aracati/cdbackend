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
exports.Cargo = void 0;
const Usuario_1 = require("./Usuario");
const typeorm_1 = require("typeorm");
let Cargo = class Cargo {
    constructor() {
        this.cargo = "Membro da Comunidade";
        // constructor(id_cargo:number, cargo:string, id_usuario: Cargo[] | null){
        //   this.id_cargo = id_cargo
        //   this.cargo = cargo
        //   this.id_usuario = id_usuario
        // }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cargo.prototype, "id_cargo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Cargo.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Usuario_1.Usuario, (usuario) => usuario.id_cargo),
    __metadata("design:type", Object)
], Cargo.prototype, "id_usuario", void 0);
Cargo = __decorate([
    (0, typeorm_1.Entity)("cargos")
], Cargo);
exports.Cargo = Cargo;
