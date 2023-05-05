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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioRepository_1 = require("./../repositories/UsuarioRepository");
const Usuario_1 = require("../models/Usuario");
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const api_erros_1 = require("../helpers/api-erros");
class UsuarioController {
    async create(req, res) {
        // criar usuário
        const { nome, email, senha, id_cargo } = req.body;
        const userExists = await UsuarioRepository_1.usuarioRepository.findOneBy({ email });
        if (userExists) {
            throw new api_erros_1.BadRequestError("Email já cadastrado ");
        }
        let user = Usuario_1.Usuario.create(nome, email, senha, id_cargo, null, null, null);
        const salt = bcrypt.genSaltSync(12);
        let senhaH = bcrypt.hashSync(senha, salt);
        user.senha = senhaH;
        const newUsuario = UsuarioRepository_1.usuarioRepository.create(user);
        await UsuarioRepository_1.usuarioRepository.save(newUsuario);
        const { senha: _, ...userSemSenha } = newUsuario;
        return res.status(201).json(userSemSenha);
    }
    async login(req, res) {
        var _a;
        const { email, senha } = req.body;
        const user = await UsuarioRepository_1.usuarioRepository.findOneBy({ email });
        if (!user) {
            throw new api_erros_1.BadRequestError("E-mail ou senha inválidos ");
        }
        const verifyPass = await bcrypt.compare(senha, user.senha);
        if (!verifyPass) {
            throw new api_erros_1.BadRequestError("E-mail ou senha inválidos ");
        }
        //criando token para autenticar usuario
        const token = jsonwebtoken_1.default.sign({ id: user.id_usuario }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "", {
            expiresIn: "8h",
        });
        const { senha: _, ...userLogin } = user;
        return res.json({
            user: userLogin,
            token: token,
        });
    }
    //usuario vai conseguir obter seus dados apartir do token
    async getProfile(req, res) {
        var _a;
        const { authorization } = req.headers;
        if (!authorization) {
            throw new api_erros_1.UnauthorizedError("Não autorizado");
        }
        const token = authorization.split(" ")[1];
        // verificando se o token existe
        const { id_usuario } = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        const user = await UsuarioRepository_1.usuarioRepository.findOneBy({ id_usuario });
        if (!user) {
            throw new api_erros_1.UnauthorizedError("Não autorizado");
        }
        const { senha: _, ...loggedUser } = user;
        return res.json(loggedUser);
        console.log(token);
    }
}
exports.UsuarioController = UsuarioController;
