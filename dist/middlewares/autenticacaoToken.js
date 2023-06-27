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
<<<<<<< HEAD
exports.autenticacaoAdmin = exports.autenticaoToken = void 0;
=======
<<<<<<< HEAD
exports.autenticacaoAdmin = exports.autenticaoToken = void 0;
=======
exports.autenticaoToken = void 0;
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
const jwt = __importStar(require("jsonwebtoken"));
const api_erros_1 = require("../helpers/api-erros");
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
const autenticaoToken = async (req, res, next) => {
    var _a;
    const { authorization } = req.headers;
    if (!authorization) {
        throw new api_erros_1.UnauthorizedError("Não autorizado");
    }
    const token = authorization.split(" ")[1];
    // verificando se o token existe
    const { id_usuario } = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
    const user = await UsuarioRepository_1.usuarioRepository.findOneBy({ id_usuario });
    if (!user) {
        throw new api_erros_1.UnauthorizedError("Não autorizado");
    }
    //const { senha: _, ...loggedUser } = user;
    next();
};
exports.autenticaoToken = autenticaoToken;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
const autenticacaoAdmin = async (req, res, next) => {
    var _a;
    const { authorization } = req.headers;
    if (!authorization) {
        throw new api_erros_1.UnauthorizedError("Não autorizado");
    }
    const token = authorization.split(" ")[1];
    // verificando se o token existe
    const { id_usuario } = jwt.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
<<<<<<< HEAD
    const user = await UsuarioRepository_1.usuarioRepository.findOne({ where: { id_usuario, }, relations: ['id_cargo'] });
    console.log(user);
    if ((user === null || user === void 0 ? void 0 : user.id_cargo.id_cargo) != 1) {
=======
    const user = await UsuarioRepository_1.usuarioRepository.findOneBy({ id_usuario });
    console.log(user);
    if (!user) {
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
        throw new api_erros_1.UnauthorizedError("Não autorizado");
    }
    next();
};
exports.autenticacaoAdmin = autenticacaoAdmin;
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
