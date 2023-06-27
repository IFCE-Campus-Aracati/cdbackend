"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const bcrypt = __importStar(require("bcrypt"));
class Usuario {
    constructor(nome, email, senha, id_cargo) {
        this.nome = nome;
        this.email = email;
        this.senha = this.validateSenha(senha);
        this.id_cargo = id_cargo;
    }
    static create(nome, email, senha, id_cargo) {
        return new Usuario(nome, email, senha, id_cargo);
    }
    validateSenha(senha) {
        const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$");
        if (senha == "" || senha == null || !(validatesenha.test(senha))) {
            throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ");
        }
        const salt = bcrypt.genSaltSync(12);
        let senhaH = bcrypt.hashSync(senha, salt);
        return senhaH;
    }
    validateEmail() {
        const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)");
        const validateEmail1 = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z])+)(@ifce.edu.br)");
        if (this.nome == "" || this.nome == null) {
            throw new Error("nome é obrigatorio");
        }
        if (this.email == "" || this.email == null) { //validade se nao e nulo ou vazio
            if (!(validateEmail.test(this.email)) || !(validateEmail1.test(this.email))) { //validade se o email é de aluno ou professor
                throw new Error("crie o email apartir do email institucional");
            }
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
}
exports.Usuario = Usuario;
