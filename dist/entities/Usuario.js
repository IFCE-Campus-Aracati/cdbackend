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
exports.Usuario = void 0;
const PedidoAnonimo_1 = require("./PedidoAnonimo");
const Cargo_1 = require("./Cargo");
const Pedido_1 = require("./Pedido");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    constructor(nome, email, senha, id_cargo, autorPedido, autorAutorizador, autorAutorizadorAnonimo) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.id_cargo = id_cargo;
        this.autorPedido = autorPedido;
        this.autorAutorizador = autorAutorizador;
        this.autorAutorizadorAnonimo = autorAutorizadorAnonimo;
        //this.validate()
    }
    validate() {
        const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$");
        const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)");
        if (this.nome == "" || this.nome == null) {
            throw new Error("nome é obrigatorio");
        }
        if (this.email == "" || this.email == null || !(validateEmail.test(this.email))) {
            throw new Error("crie o email apartir do email institucional");
        }
        if (this.senha == "" || this.senha == null || !(validatesenha.test(this.senha))) {
            throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ");
        }
    }
    get Id_usuario() {
        return this.id_usuario;
    }
    get Nome() {
        return this.nome;
    }
    get Email() {
        return this.email;
    }
    get Senha() {
        return this.senha;
    }
    get Id_cargo() {
        return this.id_cargo;
    }
    get AutorPedido() {
        return this.autorPedido;
    }
    get AutorAutorizador() {
        return this.autorAutorizador;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cargo_1.Cargo, (cargo) => cargo.id_usuario),
    (0, typeorm_1.JoinColumn)({ name: "id_cargo" }),
    __metadata("design:type", Cargo_1.Cargo)
], Usuario.prototype, "id_cargo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Pedido_1.Pedido, (pedido) => pedido.id_autorPedido),
    __metadata("design:type", Object)
], Usuario.prototype, "autorPedido", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Pedido_1.Pedido, (pedido) => pedido.id_autorAutorizador),
    __metadata("design:type", Object)
], Usuario.prototype, "autorAutorizador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PedidoAnonimo_1.PedidoAnonimo, (pedidoanonimo) => pedidoanonimo.id_autorAutorizadorAnonimo),
    __metadata("design:type", Object)
], Usuario.prototype, "autorAutorizadorAnonimo", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)("usuarios"),
    __metadata("design:paramtypes", [String, String, String, Cargo_1.Cargo, Object, Object, Object])
], Usuario);
exports.Usuario = Usuario;
