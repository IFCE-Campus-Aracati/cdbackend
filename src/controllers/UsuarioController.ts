import { usuarioRepository } from "./../repositories/UsuarioRepository";
import { Response, Request } from "express";
import { Usuario } from "../models/Usuario";
import { Usuario as User } from "../entities/Usuario.entities";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";

type JwtPayload = {
  id_usuario: number;
};

export class UsuarioController {
  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha, id_cargo } = req.body;

    const userExists = await usuarioRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("Email já cadastrado ");
    }

    let user = Usuario.create(nome, email, senha, id_cargo, null, null, null);

    const salt = bcrypt.genSaltSync(12);
    let senhaH = bcrypt.hashSync(senha, salt);

    user.senha = senhaH;

    const newUsuario = usuarioRepository.create(user);

    await usuarioRepository.save(newUsuario);

    const { senha: _, ...userSemSenha } = newUsuario;

    return res.status(201).json(userSemSenha);
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const user = await usuarioRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("E-mail ou senha inválidos ");
    }

    const verifyPass = await bcrypt.compare(senha, user.senha);

    if (!verifyPass) {
      throw new BadRequestError("E-mail ou senha inválidos ");
    }

    //criando token para autenticar usuario
    const token = jwt.sign(
      { id: user.id_usuario },
      process.env.JWT_PASS ?? "",
      {
        expiresIn: "8h",
      }
    );

    const { senha: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }

  //usuario vai conseguir obter seus dados apartir do token
  async getProfile(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedError("Não autorizado");
    }

    const token = authorization.split(" ")[1];

    // verificando se o token existe
    const { id_usuario } = jwt.verify(
      token,
      process.env.JWT_PASS ?? ""
    ) as JwtPayload;

    const user = await usuarioRepository.findOneBy({ id_usuario });

    if (!user) {
      throw new UnauthorizedError("Não autorizado");
    }

    const { senha: _, ...loggedUser } = user;

    return res.json(loggedUser);
    console.log(token);
  }
}
