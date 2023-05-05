import { PedidoAnonimoController } from "./controllers/PedidoAnonimoController";
import { HorarioController } from "./controllers/HorarioController";
import { CargoController } from "./controllers/CargoController";
import { PedidoController } from "./controllers/PedidoController";
import { UsuarioController } from "./controllers/UsuarioController";
import { Router } from "express";

const routes = Router();

// Cadastro de usuário
routes.post("/usuario", new UsuarioController().create);
// Login Usuario
routes.post("/login", new UsuarioController().login);
//Buscanco informações do usuário
routes.get("/profile", new UsuarioController().getProfile)

// Cadastro de cargo
routes.post("/cargo", new CargoController().createCargo);

// Cadastro de horário
routes.post("/horario", new HorarioController().createHorario);

// Cadastro de pedido anônimo
routes.post(
  "/pedidoanonimo",
  new PedidoAnonimoController().createPedidoAnonimo
);

// Cadastro de pedido com login
routes.post(
  "/pedido/:id_autorPedido/create",
  new PedidoController().createPedido
);

export default routes;
