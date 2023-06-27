import * as bcrypt from "bcrypt";
import { Cargo } from "../entities/Cargo.entities";

export class Usuario {

  readonly id_usuario: number;
  readonly nome: string;
  readonly email: string;
  readonly senha: string;
  readonly id_cargo: Cargo;
  foto: Buffer | null
  


  
  private constructor(nome: string, 
    email: string,
     senha: string, 
     foto: Buffer,
     id_cargo: Cargo) {                
    
    
    this.nome = nome
    this.email = this.validateEmail(email)
    this.senha = this.validateSenha(senha)
    this.foto = foto
    this.id_cargo = id_cargo
    
  }

  static create(nome: string, email: string, senha: string,foto: Buffer, id_cargo: Cargo) {
    return new Usuario(nome, email, senha, foto, id_cargo)
  }
  
  private validateSenha( senha: string) {
    const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
    
    if(senha == "" || senha == null || !(validatesenha.test(senha))) {
      throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")

    }
    const salt = bcrypt.genSaltSync(12);
    let senhaH = bcrypt.hashSync(senha, salt);
    return senhaH
  }

  private validateEmail(email: string) {
    
    
    const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")
    const validateEmail1 = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z])+)(@ifce.edu.br)")

    if(this.nome == "" || this.nome == null) {
      throw new Error("nome é obrigatorio")
    }

    if(email == "" || email == null ) { //validade se nao e nulo ou vazio
      if(!(validateEmail.test(this.email)) || !(validateEmail1.test(this.email))) { //validade se o email é de aluno ou professor
        throw new Error("crie o email apartir do email institucional")
      }
      
    }
    return email
    
    
    
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
    
  public get Foto(): Buffer | null {
    return this.foto
  }
    
  public get Id_cargo(){
    return this.id_cargo
  }
  
}
