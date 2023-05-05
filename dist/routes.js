"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoAnonimoController_1 = require("./controllers/PedidoAnonimoController");
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const PedidoController_1 = require("./controllers/PedidoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const express_1 = require("express");
const routes = (0, express_1.Router)();
// Cadastro de usuário
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
// Login Usuario
routes.post("/login", new UsuarioController_1.UsuarioController().login);
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Cadastro de cargo
routes.post("/cargo", new CargoController_1.CargoController().createCargo);
// Cadastro de horário
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// Cadastro de pedido com login
routes.post("/pedido/:id_autorPedido/create", new PedidoController_1.PedidoController().createPedido);
exports.default = routes;
