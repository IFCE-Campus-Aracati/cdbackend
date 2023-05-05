export class Cargo {

    readonly id_cargo: number;
    readonly cargo: string ;
    readonly  id_usuario: Cargo[] | null;
  
    constructor(id_cargo:number, cargo:string, id_usuario: Cargo[] | null){
      this.id_cargo = id_cargo
      this.cargo = cargo
      this.id_usuario = id_usuario
    }
}