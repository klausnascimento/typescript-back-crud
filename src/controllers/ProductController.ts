import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Product } from "../entities/Product";

export const createProduct = async (req: Request, res: Response) => {
  const productRepository = getRepository(Product);

  const { name, price, clientId } = req.body;

  const product = productRepository.create({
    name,
    price,
    client: { id: clientId }, // assuming you provide clientId in the request body
  });

  await productRepository.save(product);

  res.json(product);
};
