import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Client } from "../entities/Client";

export const createClient = async (req: Request, res: Response) => {
  const clientRepository = getRepository(Client);

  const { name, email } = req.body;

  const client = clientRepository.create({
    name,
    email,
  });

  await clientRepository.save(client);

  res.json(client);
};
