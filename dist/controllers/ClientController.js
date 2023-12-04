"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("../entities/Client");
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = (0, typeorm_1.getRepository)(Client_1.Client);
    const { name, email } = req.body;
    const client = clientRepository.create({
        name,
        email,
    });
    yield clientRepository.save(client);
    res.json(client);
});
exports.createClient = createClient;
