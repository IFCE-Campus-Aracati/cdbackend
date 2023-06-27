import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/UsuarioRepository";
import * as bcrypt from "bcrypt";
import { BadRequestError } from "../helpers/api-erros";
import { Usuario } from "../entities/Usuario.entities";
import fs from "fs";

export class adminUsuario {
  async listUser(req: Request, res: Response) {
    const { id_usuario } = req.params;
    // console.log(id_usuario);
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    if (id_usuario == null) {
      const user = await usuarioRepository.find({ relations: ["id_cargo"] });
      return res.status(200).json(user);
    } else {
      const user = await usuarioRepository
        .createQueryBuilder("usuario")
        .leftJoinAndSelect("usuario.id_cargo", "cargo")
        .where("usuario.id_usuario = :id_usuario", {
          id_usuario: Number(id_usuario),
        })
        .getOne();
      return res.status(200).json(user);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id_usuario } = req.params;
    console.log(id_usuario);

    const useReturn = await usuarioRepository.delete({
      id_usuario: Number(id_usuario),
    });

    if (useReturn.affected == 1) {
      return res.status(200).json("usuario deletado com sucesso");
    } else {
      return res
        .status(404)
        .json(
          "não foi possivel deletar, certifique se tudo está correto e tente novamente"
        );
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id_usuario } = req.params;
    const { nome, email, senha, cargo } = req.body;
    const { authorization } = req.headers;

    let foto: Buffer | undefined;

    if (req.file) {
      foto = fs.readFileSync(req.file.path);
    }

    if (!authorization) {
      throw new BadRequestError("Não autorizado");
    }

    const user = await usuarioRepository.findOneBy({
      id_usuario: Number(id_usuario),
    });
    if (!user) {
      throw new BadRequestError("usuario nao existe");
    }

    user.nome = nome || user.nome;
    user.email = email || user.email;
    user.senha = senha || user.senha;
    user.id_cargo = cargo || user.id_cargo;

    user.foto = foto || Buffer.alloc(0);

    if (senha) {
      user.senha = await bcrypt.hash(senha, 10);
    }

    const useReturn = await usuarioRepository
      .createQueryBuilder()
      .update(Usuario)
      .set({
        nome: nome,
        email: email,
        senha: senha,
        id_cargo: cargo,
        foto: foto || user.foto,
      })
      .where({ id_usuario: id_usuario })
      .execute();

    if (useReturn.affected == 1) {
      return res.status(200).json("alteração feita com sucesso");
    } else {
      return res
        .status(404)
        .json(
          "não foi possivel alterar usuário, certifique se tudo está correto e tente novamente"
        );
    }
  }
}
