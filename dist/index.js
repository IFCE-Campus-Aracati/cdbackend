"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
<<<<<<< HEAD
=======
const cors_1 = __importDefault(require("cors"));
>>>>>>> main
data_source_1.AppDataSource.initialize().then(async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use(routes_1.default);
    return app.listen(process.env.PORT, () => {
        console.log(`localhost:${process.env.PORT}`);
    });
});
// const path = `${__dirname}/arquivo/item_2.STL`
// const arquivo1 = fs.readFileSync(path, 'ascii')
// console.log(arquivo1)
// let pedido = new Pedido("PLA", Prioridade.baixa, "impressora1", arquivo1)
// console.log(pedido)
