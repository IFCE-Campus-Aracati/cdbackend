"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const PedidoAnonimo_entites_1 = require("./entities/PedidoAnonimo.entites");
const Usuario_entities_1 = require("./entities/Usuario.entities");
const Pedido_entities_1 = require("./entities/Pedido.entities");
const HoraDisponivel_entities_1 = require("./entities/HoraDisponivel.entities");
const Cargo_entities_1 = require("./entities/Cargo.entities");
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
<<<<<<< HEAD
// import { default1679541259198 } from './migrations/1679541259198-default';
// import { default1683754239343 } from './migrations/1683754239343-default';
// import { default1686339665727 } from './migrations/1686339665727-default';
// import { default1686340715551 } from './migrations/1686340715551-default';
// import { default1686353144656 } from './migrations/1686353144656-default';
// import { default1686353476865 } from './migrations/1686353476865-default';
// import { default1686353972801 } from './migrations/1686353972801-default';
// import { default1686355895579 } from './migrations/1686355895579-default';
// import { default1686421422676 } from './migrations/1686421422676-default';
// import { default1687057360266 } from './migrations/1687057360266-default';
const _1687109407340_default_1 = require("./migrations/1687109407340-default");
=======
const _1679541259198_default_1 = require("./migrations/1679541259198-default");
const _1683754239343_default_1 = require("./migrations/1683754239343-default");
<<<<<<< HEAD
=======
const _1686339665727_default_1 = require("./migrations/1686339665727-default");
const _1686340715551_default_1 = require("./migrations/1686340715551-default");
const _1686353144656_default_1 = require("./migrations/1686353144656-default");
const _1686353476865_default_1 = require("./migrations/1686353476865-default");
const _1686353972801_default_1 = require("./migrations/1686353972801-default");
const _1686355895579_default_1 = require("./migrations/1686355895579-default");
const _1686421422676_default_1 = require("./migrations/1686421422676-default");
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
const port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Cargo_entities_1.Cargo, HoraDisponivel_entities_1.HoraDisponivel, Pedido_entities_1.Pedido, Usuario_entities_1.Usuario, PedidoAnonimo_entites_1.PedidoAnonimo],
<<<<<<< HEAD
    migrations: [
        // default1679541259198, default1683754239343, default1686339665727, 
        // default1686340715551, default1686353144656,default1686353476865, default1686353972801,
        //  default1686355895579, default1686421422676, default1687057360266, 
        _1687109407340_default_1.default1687109407340
    ],
=======
<<<<<<< HEAD
    migrations: [_1679541259198_default_1.default1679541259198, _1683754239343_default_1.default1683754239343],
=======
    migrations: [_1679541259198_default_1.default1679541259198, _1683754239343_default_1.default1683754239343, _1686339665727_default_1.default1686339665727,
        _1686340715551_default_1.default1686340715551, _1686353144656_default_1.default1686353144656, _1686353476865_default_1.default1686353476865, _1686353972801_default_1.default1686353972801,
        _1686355895579_default_1.default1686355895579, _1686421422676_default_1.default1686421422676],
>>>>>>> main
>>>>>>> 1611ae6ded2549344d78a728c0fd2d6dcda83c77
    subscribers: []
});
exports.AppDataSource.initialize();
