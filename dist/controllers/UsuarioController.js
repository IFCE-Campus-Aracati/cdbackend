"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioRepository_1 = require("./../repositories/UsuarioRepository");
class UsuarioController {
    async create(req, res) {
        // criar usuário
        const { nome, email, senha, id_cargo } = req.body;
        //validação fullera
        if (!nome) {
            return res.status(400).json({ message: "O nome é obrigatório" });
        }
        const newUsuario = UsuarioRepository_1.usuarioRepository.create({
            nome,
            email,
            senha,
            id_cargo,
        });
        await UsuarioRepository_1.usuarioRepository.save(newUsuario);
        return res.status(201).json(newUsuario);
    }
}
exports.UsuarioController = UsuarioController;
