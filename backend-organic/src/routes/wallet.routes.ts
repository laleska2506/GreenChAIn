import express from "express";
import { createWalletController } from "../controllers/wallet.controller";

const router = express.Router();

router.post("/", createWalletController); // POST /api/wallet

export default router;
