"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const OrderRepository_1 = require("../repositories/OrderRepository");
class OrderController {
    async create(req, res) {
        const { orderUsername, startDate, endDate, printer, state } = req.body;
        const { id_user } = req.params;
        try {
            const newOrder = OrderRepository_1.OrderRepository.create({
                orderUsername,
                startDate,
                endDate,
                printer,
                state
            });
            await OrderRepository_1.OrderRepository.save(newOrder);
            return res.status(201).json(newOrder);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.OrderController = OrderController;
