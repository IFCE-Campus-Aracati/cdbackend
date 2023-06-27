"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoAnonimoController_1 = require("./controllers/PedidoAnonimoController");
const HorarioController_1 = require("./controllers/HorarioController");
const CargoController_1 = require("./controllers/CargoController");
const PedidoController_1 = require("./controllers/PedidoController");
const UsuarioController_1 = require("./controllers/UsuarioController");
const adminController_1 = require("./controllers/adminController");
const express_1 = require("express");
const autenticacaoToken_1 = require("./middlewares/autenticacaoToken");
<<<<<<< HEAD
=======
<<<<<<< HEAD
const adminController_1 = require("./controllers/adminController");
=======
const uploadMiddleware_1 = require("./uploadMiddleware"); // Importar o middleware de upload de arquivos
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
const routes = (0, express_1.Router)();
// PEDIDO ANÔNIMO
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo/create", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// lista de todos os pedidos
routes.get("/pedidoanonimo/get", new PedidoAnonimoController_1.PedidoAnonimoController().listPedidosAnonimos);
routes.get("/pedidoanonimo/geteste", new PedidoAnonimoController_1.PedidoAnonimoController().listPedidosAnonimosT);
// lista pelo código do pedido
routes.get("/pedidoanonimo/getPedidoByCodigo/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().getPedidoByCodigo);
// update pedido pelo código
routes.put("/pedidoanonimo/update/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().updatePedido);
// delete pedido pelo código
routes.delete("/pedidoanonimo/delete/:codigo", new PedidoAnonimoController_1.PedidoAnonimoController().deletePedido);
// USUÁRIO
// Login Usuario
routes.post("/login", new UsuarioController_1.UsuarioController().login);
// Cadastro de usuário
<<<<<<< HEAD
routes.post("/usuario", new UsuarioController_1.UsuarioController().create);
=======
<<<<<<< HEAD
routes.use(autenticacaoToken_1.autenticaoToken);
//a partir daqui tds as rotas so sao acessadas apenas com a token
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Cadastro de cargo
routes.post("/cargo", new CargoController_1.CargoController().createCargo);
// Cadastro de horário
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
// Cadastro de pedido anônimo
routes.post("/pedidoanonimo", new PedidoAnonimoController_1.PedidoAnonimoController().createPedidoAnonimo);
// Cadastro de pedido
routes.post("/pedido", new PedidoController_1.PedidoController().createPedido); //cria
routes.get("/pedido", new PedidoController_1.PedidoController().readPedido); //pega
routes.put("/pedido", new PedidoController_1.PedidoController().updatePedido); //modifica estado
routes.delete("/pedido", new PedidoController_1.PedidoController().deletePedido); //exclui
routes.use(autenticacaoToken_1.autenticacaoAdmin);
routes.get("/adminPedidos/estado_pedido=:estado", new adminController_1.adminController().readPedidos);
//retornar os pedidos a partir do estado
routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController_1.adminController().updatePedidos);
//atualiza o pedido apartir do id
routes.post("/adminPedidos", new adminController_1.adminController().user);
=======
routes.post("/horario", new HorarioController_1.HorarioController().createHorario);
routes.use(autenticacaoToken_1.autenticaoToken);
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
//a partir daqui tds as rotas so sao acessadas apenas com a token
routes.use(autenticacaoToken_1.autenticaoToken);
// USUÁRIO 
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController_1.UsuarioController().getProfile);
// Atualizar usuário
routes.put("/user/update", new UsuarioController_1.UsuarioController().updateUser);
// Deletar usuário
routes.delete("/user/delete", new UsuarioController_1.UsuarioController().deleteUser);
// HORÁRIO
// criar horário
routes.post("/horario/create", new HorarioController_1.HorarioController().createHorario);
// lista todos os horários 
routes.get("/horario/get", new HorarioController_1.HorarioController().listHorarios);
// lista horario por id
routes.get("/horario/getById/:id_horario", new HorarioController_1.HorarioController().getHorarioById);
// update horário por id
routes.put("/horario/update/:id_horario", new HorarioController_1.HorarioController().updateHorario);
//delete horário por id
routes.delete("/horario/delete/:id_horario", new HorarioController_1.HorarioController().deleteHorario);
// PEDIDO COM USUÁRIO
// Cadastro de pedido
<<<<<<< HEAD
routes.post("/pedido/create", new PedidoController_1.PedidoController().createPedido);
// lista todos os pedidos do usuário
routes.get("/pedido/get", new PedidoController_1.PedidoController().getPedidosByUsuario);
// lista todos os pedidos do usuario por estado
routes.get("/pedido/estado/:estado", new PedidoController_1.PedidoController().getPedidosByEstado);
// atualiza o pedido por id
routes.put("/pedido/update/:id_pedido", new PedidoController_1.PedidoController().updatePedido); //*
// deleta o pedido por id
routes.delete("/pedido/delete/:id_pedido", new PedidoController_1.PedidoController().deletePedido);
//rotas que sao acessadas pelo root
routes.use(autenticacaoToken_1.autenticacaoAdmin);
routes.get("/adminPedidos/estado_pedido=:estado", new adminController_1.adminController().readPedidos);
//retornar os pedidos a partir do estado
routes.put("/adminPedidos/id_pedido=:id_pedido", new adminController_1.adminController().updatePedidos);
//atualiza o pedido apartir do id
routes.post("/adminPedidos", new adminController_1.adminController().user);
// CARGO
// criar cargo
routes.post("/cargo/create", new CargoController_1.CargoController().createCargo);
// listar cargos
routes.get("/cargo/get", new CargoController_1.CargoController().listCargos);
// listar cargo por id
routes.get("/cargo/get/:id_cargo", new CargoController_1.CargoController().getCargoById);
// update cargo
routes.put("/cargo/update/:id_cargo", new CargoController_1.CargoController().updateCargo);
3;
routes.delete("/cargo/delete/:id_cargo", new CargoController_1.CargoController().deleteCargo);
=======
routes.post("/pedido", uploadMiddleware_1.upload.single("arquivo"), new PedidoController_1.PedidoController().createPedido);
// routes.post( "/pedido", new PedidoController().createPedido);
routes.get("/pedido", new PedidoController_1.PedidoController().readPedido);
routes.put("/pedido", new PedidoController_1.PedidoController().updatePedido);
routes.delete("/pedido", new PedidoController_1.PedidoController().deletePedido);
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
exports.default = routes;
