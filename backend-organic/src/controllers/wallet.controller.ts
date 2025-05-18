import { RequestHandler } from "express";
import { createWallet } from "../services/wallet.service";

export const createWalletController: RequestHandler = async (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    res.status(400).json({ error: "Se requiere el nombre de la wallet" });
    return;
  }

  const result = await createWallet(nombre);
  res.status(201).json(result);
};
