"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, email, senha, id_cargo, autorPedido, autorAutorizador, autorAutorizadorAnonimo) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.id_cargo = id_cargo;
        this.autorPedido = autorPedido;
        this.autorAutorizador = autorAutorizador;
        this.autorAutorizadorAnonimo = autorAutorizadorAnonimo;
        this.validate();
    }
    static create(nome, email, senha, id_cargo, autorPedido, autorAutorizador, autorAutorizadorAnonimo) {
        return new Usuario(nome, email, senha, id_cargo, autorPedido, autorAutorizador, autorAutorizadorAnonimo);
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
}
exports.Usuario = Usuario;
