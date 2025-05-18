import { Request, Response } from "express";
import { interpretProductText } from "../services/ai.service";
import { registerOnBlockchain } from "../services/near.service";

export const createProduct = async (req: Request, res: Response) => {
    try{
        const {prompt } = req.body;

        //enviar texto a ai para interpretar
        const structuredProduct = await interpretProductText(prompt);

        const txHash = await registerOnBlockchain(structuredProduct);

        return res.status(201).json({
            product: structuredProduct,
            txHash,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({
            error: "Failed to create product",
        });
    }
};