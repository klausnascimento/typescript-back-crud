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
exports.createProduct = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../entities/Product");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const { name, price, clientId } = req.body;
    const product = productRepository.create({
        name,
        price,
        client: { id: clientId }, // assuming you provide clientId in the request body
    });
    yield productRepository.save(product);
    res.json(product);
});
exports.createProduct = createProduct;
