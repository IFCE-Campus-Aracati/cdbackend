import { PedidoAnonimo } from "./PedidoAnonimo";
import { Cargo } from "./Cargo";
import { Pedido } from "./Pedido";
import * as bcrypt from "bcrypt"
export class Usuario {

  readonly id_usuario: number;
  readonly nome: string;
  readonly email: string;
  senha: string;
  readonly id_cargo: Cargo;
  readonly autorPedido: Pedido[] | null;
  readonly autorAutorizador: Pedido[] | null;
  readonly autorAutorizadorAnonimo: PedidoAnonimo[] | null;

  
  private constructor(nome: string, email: string, 
              senha: string, id_cargo: Cargo, autorPedido: Pedido[] | null,
              autorAutorizador: Pedido[] | null, autorAutorizadorAnonimo: PedidoAnonimo[]  | null) {                

    this.nome = nome
    this.email = email
    this.senha = senha
    this.id_cargo = id_cargo
    this.autorPedido = autorPedido
    this.autorAutorizador = autorAutorizador
    this.autorAutorizadorAnonimo = autorAutorizadorAnonimo
    this.validate()
    
  }

  static create(nome: string, email: string, 
    senha: string, id_cargo: Cargo, autorPedido: Pedido[] | null,
    autorAutorizador: Pedido[] | null, autorAutorizadorAnonimo: PedidoAnonimo[]  | null) {

    return new Usuario(nome, email, senha, id_cargo, autorPedido, autorAutorizador, autorAutorizadorAnonimo)

  }
  


  private validate() {
    
    const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
    const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")

    if(this.nome == "" || this.nome == null) {
      throw new Error("nome é obrigatorio")
    }
    if(this.email == "" || this.email == null || !(validateEmail.test(this.email))) {
      throw new Error("crie o email apartir do email institucional")
    }
    if(this.senha == "" || this.senha == null || !(validatesenha.test(this.senha))) {
      throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")

    }
    
  }

  
  public get Id_usuario() {
    return this.id_usuario
  }
  public get Nome() {
    return this.nome
  }
  public get Email() {
    return this.email
  }
  public get Senha() {
    return this.senha
  }
    
  public get Id_cargo(){
    return this.id_cargo
  }
  
  public get AutorPedido() {
    return this.autorPedido
  }
  
  public get AutorAutorizador() {
    return this.autorAutorizador
  }
  
}
