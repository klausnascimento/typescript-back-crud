"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// import { createUser } from "./controllers/ClientController";
const ClientController_1 = require("./controllers/ClientController");
const ProductController_1 = require("./controllers/ProductController");
const User_1 = require("./entities/User");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// app.post("/users", createUser);
app.post("/clients", ClientController_1.createClient);
app.post("/products", ProductController_1.createProduct);
(0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "304191023",
    database: "typecrud",
    synchronize: true,
    logging: true,
    entities: [User_1.User],
})
    .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch((error) => console.log(error));
